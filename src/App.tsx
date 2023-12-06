import { ReactElement } from "react";
import { PlotterSvg } from "./PlotterSvg";

export function App(): ReactElement {
  return (
    <PlotterSvg
      a3={true}
      letter={{ x: 70, y: 10 }}
      css={{ border: "1px solid black", width: "400px", height: "400px" }}
    />
  );
}
