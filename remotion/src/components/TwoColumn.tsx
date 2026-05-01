import React from "react";

export const TwoColumn: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
}> = ({ left, right }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 60,
        flex: 1,
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {left}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {right}
      </div>
    </div>
  );
};
