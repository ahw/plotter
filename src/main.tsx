import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import { createSvgElement } from "./utils/svg.ts";
import { App } from './App.tsx';

const svg = createSvgElement({
  letter: { x: 70, y: 10 },
  a3: true,
  css: { border: "1px solid black", width: '400px', height: '400px' },
});
document.getElementById("root")?.appendChild(svg);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
