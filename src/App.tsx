import { ReactElement } from "react";
import { PlotterSvg } from "./PlotterSvg";
import { PlaidPattern } from "./PlaidPattern";

export function App(): ReactElement {
  return (
    <PlotterSvg
      a3={true}
      letter={{ x: 70, y: 10 }}
      css={{ border: "1px solid black", width: "400px", height: "400px" }}
    >
      <PlaidPattern
        pattern={[
          {
            color: "navy",
            size: 10,
          },
          {
            color: "crimson",
            size: 5,
          },
          // {
          //   color: 'transparent',
          //   size: 2,
          // },
          {
            color: "gold",
            size: 2,
          },
        ]}
        repeat={8}
      />
    </PlotterSvg>
  );
}
