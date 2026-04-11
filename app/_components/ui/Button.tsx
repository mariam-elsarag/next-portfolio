"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import Spinner from "../feadback/Spinner";

type Props = {
  text?: string;
  onClick?: () => void;
  to?: string;
  variant?: "primary" | "glass" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  hasFullWidth?: boolean;
  className?: string;
  size?: "lg" | "md" | "sm";
  iconDirection?: "right" | "left";
  icon?: ReactNode;
};
const Button = ({
  text,
  onClick,
  to,
  variant = "primary",
  loading,
  disabled,
  className,
  size = "lg",
  iconDirection = "right",
  hasFullWidth = false,
  icon,
}: Props) => {
  const router = useRouter();
  const base = `font-space rounded-full uppercase  transition outline-none shadow-none flex items-center justify-center gap-2 ${
    loading || disabled ? "cursor-not-allowed" : "cursor-pointer"
  } `;
  const styles = {
    primary: "bg-primary text-on-primary hover:bg-primary-container font-bold ",
    glass:
      " font-bold bg-white/3 text-on-surface border border-white/10 backdrop-blur-md",
    ghost: "bg-transparent text-on-surface/60 font-[400]",
  };
  const sizes = {
    lg: " text-[11px] sm:text-xs  tracking-[1.2px] h-12 px-2 sm:px-4 md:px-10",
    md: "text-xs h-11 px-4 ",
    sm: "px-6 h-9 tracking-[1px] text-[10px]",
  };
  const spinnerStyle = {
    primary: "border-on-primary",
    glass: "border-on-surface",
    ghost: "border-primary",
  };
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (to) {
          router.push(to);
        }
      }}
      className={`${base} ${className ?? ""} ${hasFullWidth ? "w-full" : ""} ${
        styles[variant]
      } ${sizes[size]} `}
    >
      {iconDirection === "left" ? (
        loading ? (
          <Spinner className={spinnerStyle[variant]} />
        ) : icon ? (
          icon
        ) : null
      ) : null}
      {text && <span>{text}</span>}
      {iconDirection === "right" ? (
        loading ? (
          <Spinner className={spinnerStyle[variant]} />
        ) : icon ? (
          icon
        ) : null
      ) : null}
    </button>
  );
};

export default Button;
