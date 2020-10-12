import React, { useState } from "react";

import "./App.css";

function App() {
  const [Hori, setHori] = useState(10);
  const [Verti, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("black");
  const [Check, setCheckOn] = useState(false);
  const [dark, setMode] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <p class="range-field">
          <label>Horizontal</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={Hori}
            onChange={(e) => setHori(e.target.value)}
          />
          <label>Vertcal</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={Verti}
            onChange={(e) => setVeri(e.target.value)}
          />
          <label>Blur</label>
          <input
            type="range"
            min="0"
            max="200"
            value={Blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <label>Color</label>
          <input
            type="color"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div className="switch">
            <label>
              Outline
              <input
                type="checkbox"
                checked={Check}
                onChange={() => setCheckOn(!Check)}
              />
              <span className="lever"></span>
              Inset
            </label>
          </div>
        </p>
      </div>

      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              Check ? "inset" : ""
            } ${Hori}px ${Verti}px ${Blur}px ${Color}`,
          }}
        >
          <p>
            box shadow:{Hori}px {Verti}px {Blur}px {Color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
