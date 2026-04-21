import React from "react";
import { COLORS, FONT } from "../constants";

export const StepBadge: React.FC<{
  step: string;
  label: string;
  color?: string;
}> = ({ step, label, color = COLORS.blue }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: FONT,
        fontSize: 18,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 24,
      }}
    >
      <span style={{ fontWeight: 700, color }}>{step}</span>
      <span style={{ color: COLORS.muted }}>&nbsp;—&nbsp;{label}</span>
    </div>
  );
};
