"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text?: string;
  onClick?: () => void;
  to?: string;
  variant?: "primary" | "glass" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  size?: "lg" | "sm";
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
}: Props) => {
  const router = useRouter();
  const base = `font-space rounded-full uppercase  transition outline-none shadow-none flex items-center justify-center gap-2 ${
    loading || disabled ? "cursor-not-allowed" : "cursor-pointer"
  } `;
  const styles = {
    primary: "bg-primary text-on-primary hover:bg-primary-container font-bold ",
    glass:
      " font-bold bg-transparent text-surface border border-surface-variant backdrop-blur-md",
    ghost: "bg-transparent text-on-surface/60 font-[400]",
  };
  const sizes = {
    lg: "text-xs tracking-[1.2px] py-5 px-10",
    sm: "px-6 py-2 tracking-[1px] text-[10px]",
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
      className={`${base} ${className ?? ""} ${styles[variant]} ${
        sizes[size]
      } `}
    >
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
