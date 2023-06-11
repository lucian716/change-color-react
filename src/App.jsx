import { useEffect } from "react";

function App() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];

  return (
    <div id="app">
    <h1 id="current-color"></h1>

    <div className="colors"></div>
  </div>
  );
}
