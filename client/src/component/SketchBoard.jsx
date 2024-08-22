// src/SketchBoard.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import CanvasDraw from "react-canvas-draw";

const SketchBoard = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <CanvasDraw
        style={{ border: "1px solid #ddd" , height: "100vh" , width:"100vw"}}
        hideGrid
        brushColor="black"
        brushRadius={5}
        lazyRadius={0}
      />
    </div>
  );
};

export default SketchBoard;
