export function createSvgElement(options?: {
  a3?: boolean;
  letter?: { x: number; y: number };
  css?: Partial<CSSStyleDeclaration>;
}) {
  // SVG canvas and particle elements
  const xmlns = "http://www.w3.org/2000/svg";
  const svgCanvas = document.createElementNS(xmlns, "svg");
  // A3 is 297x420mm
  svgCanvas.setAttribute("width", "297mm");
  svgCanvas.setAttribute("height", "420mm");
  svgCanvas.setAttribute("viewBox", "0 0 297 420");

  if (options?.css) {
    for (const property in options.css) {
      const value = options.css[property];
      if (value) {
        svgCanvas.style[property] = value;
      }
    }
  }

  if (options?.a3) {
    const rect = document.createElementNS(xmlns, "rect");
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0.4");
    rect.setAttribute("width", "297");
    rect.setAttribute("height", "420");
    rect.setAttribute("style", `stroke:#0000ff;fill:none`);
    svgCanvas.appendChild(rect);
  }

  if (options?.letter) {
    const rect = document.createElementNS(xmlns, "rect");
    rect.setAttribute("x", options.letter.x.toString());
    rect.setAttribute("y", options.letter.y.toString());
    rect.setAttribute("width", "215.9");
    rect.setAttribute("height", "279.4");
    rect.setAttribute("style", `fill:#00ffff;fill-opacity:1`);
    svgCanvas.appendChild(rect);
  }

  return svgCanvas;
}
