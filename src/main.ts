import "./style.css";
import { createSvgElement } from "./utils/svg.ts";

const svg = createSvgElement({
  letter: { x: 70, y: 10 },
  a3: true,
  css: { border: "1px solid black", width: '400px', height: '400px' },
});
document.getElementById("root")?.appendChild(svg);
