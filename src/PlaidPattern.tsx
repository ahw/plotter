import { ReactElement, useEffect, useMemo } from "react";

export interface PlaidStripeInfo {
  color: string;
  size: number;
}

export function PlaidStripe({
  direction,
  plaidItem,
  x,
  y,
}: {
  direction: "horizontal" | "vertical";
  plaidItem: PlaidStripeInfo;
  x: number;
  y: number;
}): ReactElement | null {
  if (plaidItem.color === 'transparent') {
    return null;
  }

  return (
    <rect
      width={direction === "horizontal" ? 1000 : plaidItem.size}
      height={direction === "vertical" ? 1000 : plaidItem.size}
      x={x}
      y={y}
      fill={plaidItem.color}
      opacity={0.5}
    />
  );
}

export function PlaidPattern({
  pattern,
  repeat,
}: {
  pattern: PlaidStripeInfo[];
  repeat: number;
}): ReactElement {
  const stripes = useMemo<Array<PlaidStripeInfo & { start: number }>>(() => {
    const totalPatternSize = 2 * pattern.reduce((prev, p) => prev + p.size, 0);
    const result: Array<PlaidStripeInfo & { start: number }> = [];
    let start = 0;
    const reversed = window.structuredClone(pattern);
    reversed.reverse();
    [...pattern, ...reversed].forEach((stripe, i) => {
      for (let r = 0; r < repeat; r++) {
        const ri = r * totalPatternSize + i;
        const rstart = r * totalPatternSize + start;
        result[ri] = {
          start: rstart,
          ...stripe,
        };
      }
      start += stripe.size;
    });

    return result;
  }, [pattern]);

  useEffect(() => {
    console.log(stripes);
  }, [stripes])

  return (
    <>
      {stripes.map((stripe, i) => (
        <PlaidStripe
          direction="horizontal"
          plaidItem={stripe}
          x={0}
          y={stripe.start}
          key={`horizontal${i}`}
        />
      ))}
      {stripes.map((stripe, i) => (
        <PlaidStripe
          direction="vertical"
          plaidItem={stripe}
          x={stripe.start}
          y={0}
          key={`vertical${i}`}
        />
      ))}
    </>
  );
}
