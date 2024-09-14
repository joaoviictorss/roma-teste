import * as React from "react";

import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={id}
            className="px-4 text-xs text-gray-700 hidden sm:block"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md overflow-hidden border text-gray-700 bg-[#F2F2F2] px-4 text-sm placeholder:text-[#8E8E8E] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs pl-4">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
