import React, { ReactElement } from "react";

export function PlotterSvg(options: React.PropsWithChildren<{
  a3?: boolean;
  letter?: { x: number; y: number };
  css?: React.CSSProperties;
}>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // A3 is 297x420mm
      width="297mm"
      height="420mm"
      viewBox="0 0 297 420"
      style={options?.css}
    >
      {options?.a3 && (
        <rect
          x={0}
          y={0}
          width={297}
          height={420}
          style={{ stroke: "#0000ff", fill: "none" }}
        />
      )}
      {options?.letter && (
        <rect
          x={options.letter.x.toString()}
          y={options.letter.y.toString()}
          width={215.9}
          height={279.4}
          style={{ stroke: "#ffff00", fill: '#ffff00', fillOpacity: 1 }}
        />
      )}
      {options.children}
    </svg>
  );
}
