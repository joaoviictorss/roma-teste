import * as React from "react";

import { cn } from "../../lib/utils";

import Input from "./input";

import eyeIcon from "../../assets/icons/eye.svg";
import eyeClosedIcons from "../../assets/icons/eye-closed.svg";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  passwordIsShowing: boolean;
  handleShowPassword: () => void;
  label?: string;
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      className,
      passwordIsShowing,
      handleShowPassword,
      error,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div className="flex flex-col gap-1 w-full">
          {label && (
            <label
              htmlFor={id}
              className="px-4 text-xs text-gray-700 hidden sm:block"
            >
              {label}
            </label>
          )}

          <div
            className={cn(
              "flex w-full justify-between items-center gap-2 bg-[#F2F2F2] border px-4 rounded-md",
              className
            )}
          >
            <Input className="w-full border-none p-0" ref={ref} {...props} />
            <button
              onClick={handleShowPassword}
              aria-label={passwordIsShowing ? "Hide password" : "Show password"}
              type="button"
            >
              <img
                src={passwordIsShowing ? eyeIcon : eyeClosedIcons}
                alt="icone olho"
              />
            </button>
          </div>
          {error && <span className="text-red-500 text-xs pl-4">{error}</span>}
        </div>
      </>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
