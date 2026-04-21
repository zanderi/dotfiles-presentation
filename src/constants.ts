import { Easing } from "remotion";
import { fontFamily } from "./fonts";

export const COLORS = {
  bg: "#0d1117",
  surface: "#161b22",
  border: "#30363d",
  text: "#e6edf3",
  muted: "#8b949e",
  blue: "#58a6ff",
  green: "#3fb950",
  purple: "#bc8cff",
  orange: "#f0883e",
  yellow: "#e3b341",
  red: "#f85149",
} as const;

export const FONT = fontFamily;

export const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
