import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;

  bgColor?: string;
  textColor?: string;

  padding?: string;
  fontSize?: string;
};

export default function Button({
  label,
  onClick,
  icon,
  bgColor = "#7ddc8a",
  textColor = "#000",
  padding = "14px 28px",
  fontSize = "15px",
}: ButtonProps) {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding,
        fontSize,
      }}
    >
      <span className="btn-text">{label}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
