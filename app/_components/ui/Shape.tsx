import React from "react";
type ShapeProps = {
  align?: "right" | "left" | "center";
  size: string;
  className?: string;
};
const Shape = ({ align = "right", size = "100px" }: ShapeProps) => {
  const position = {
    right: "right-0 ",
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
  };
  return (
    <div
      className={` bg-tertiary/5 blur-2xl rounded-full absolute top-1/2 -translate-y-1/2 ${position[align]}`}
      style={{
        width: `${size}`,
        height: `${size}`,
      }}
    />
  );
};

export default Shape;
