import { createSvgElement } from "./utils/svg";

function shape({
  shape,
  attrs,
}: {
  shape: "circle";
  attrs: Record<string, string>;
}): SVGElement {
  const xmlns = "http://www.w3.org/2000/svg";
  switch (shape) {
    case "circle":
      const circle = document.createElementNS(xmlns, shape);
      for (const [key, value] of Object.entries(attrs)) {
        circle.setAttribute(key, value);
      }
      return circle;
  }
}

function main() {
  console.log("hello");
  // Define particle properties
  const particle1 = {
    mass: 1,
    x: 100,
    y: 300,
    velocityX: 2,
    velocityY: -8,
  };

  const planet = {
    mass: 1000000000,
    x: 400,
    y: 300,
  };

  const gravitationalConstant = 0.00002; // Adjust as needed

  // SVG canvas and particle elements
  const xmlns = "http://www.w3.org/2000/svg";
  const svgCanvas = createSvgElement({ letter: { x: 70, y: 10 }});
  svgCanvas.style.cssText = "border:1px solid black";
  document.getElementById("root")?.appendChild(svgCanvas);
  const particle1Element = document.createElementNS(xmlns, "circle");
  const particle2Element = document.createElementNS(xmlns, "circle");

  // Set particle attributes
  particle1Element.setAttribute("cx", particle1.x.toString());
  particle1Element.setAttribute("cy", particle1.y.toString());
  particle1Element.setAttribute("r", "5");
  particle1Element.setAttribute("fill", "blue");

  particle2Element.setAttribute("cx", planet.x.toString());
  particle2Element.setAttribute("cy", planet.y.toString());
  particle2Element.setAttribute("r", "20");
  particle2Element.setAttribute("fill", "red");

  // Append particles to the SVG canvas
  svgCanvas.appendChild(particle1Element);
  svgCanvas.appendChild(particle2Element);

  // Animation loop
  function animate() {
    // Calculate the distance between particles
    const dx = planet.x - particle1.x;
    const dy = planet.y - particle1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate gravitational force
    const force =
      (gravitationalConstant * particle1.mass * planet.mass) /
      (distance * distance);

    // Calculate acceleration
    const accelerationX = (force / particle1.mass) * (dx / distance);
    const accelerationY = (force / particle1.mass) * (dy / distance);

    // Update velocity
    particle1.velocityX += accelerationX;
    particle1.velocityY += accelerationY;

    // Update position
    particle1.x += particle1.velocityX;
    particle1.y += particle1.velocityY;

    // Update particle1 element position
    const el1 = shape({
      shape: "circle",
      attrs: {
        cx: particle1.x.toString(),
        cy: particle1.y.toString(),
        r: "5",
        fill: "blue",
      },
    });
    if (el1) {
      svgCanvas.appendChild(el1);
    }

    planet.x += Math.random() < 0.5 ? 1 : -1;
    planet.y += Math.random() < 0.5 ? 1 : -1;
    particle2Element.setAttribute("cx", planet.x.toString());
    particle2Element.setAttribute("cy", planet.y.toString());
    // Request the next frame
    // requestAnimationFrame(animate);
    setTimeout(animate, 50);
  }

  // Start the animation
  animate();
}

main();
