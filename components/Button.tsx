import React from "react";

type FancyButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({ children, className = "", onClick }: FancyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        text-foreground group relative overflow-hidden px-5 py-2
        bg-transparent border border-2 border-[hsla(4.1,89.6%,58.4%,1)] 
        transition-colors duration-300 rounded-sm text-sm hover:cursor-pointer ${className}
      `}
    >
      {/* sliding fill layer */}
      <span
        className="
          absolute inset-0 left-0 w-0 bg-[hsla(4.1,89.6%,58.4%,1)] 
          transition-all duration-500 ease-out 
          group-hover:w-full
          z-0
        "
      />
      {/* button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
