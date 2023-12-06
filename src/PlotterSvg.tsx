import React, { ReactElement } from "react";

export function PlotterSvg(options?: {
  a3?: boolean;
  letter?: { x: number; y: number };
  css?: Partial<CSSStyleDeclaration>;
}): ReactElement {
  const style: Record<string, any> = {};
  if (options?.css) {
    for (const property in options.css) {
      const value = options.css[property];
      if (value) {
        style[property] = value;
      }
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // A3 is 297x420mm
      width="297mm"
      height="420mm"
      viewBox="0 0 297 420"
      style={style}
    >
      {options?.a3 && (
        <rect
          x={0}
          y={0}
          width={297}
          height={420}
          style={{ stroke: "#ff00ff", fill: "none" }}
        />
      )}
      {options?.letter && (
        <rect
          x={options.letter.x.toString()}
          y={options.letter.y.toString()}
          width={215.9}
          height={279.4}
          style={{ stroke: "#00ffff", fill: '#00ffff', fillOpacity: 1 }}
        />
      )}
    </svg>
  );
}
