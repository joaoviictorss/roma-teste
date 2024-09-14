import * as React from "react";

interface SwitchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isToggled: boolean;
  handleToggle: () => void;
  label?: string;
}

const SwitchInput = React.forwardRef<HTMLInputElement, SwitchInputProps>(
  ({ isToggled, handleToggle, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <label htmlFor="switch" className="relative inline-block w-10 h-6">
          <input
            type="checkbox"
            id="switch"
            className="opacity-0 w-0 h-0 peer"
            checked={isToggled}
            onChange={handleToggle}
            ref={ref}
            {...props}
          />
          <span className="absolute cursor-pointer inset-0 bg-[#F2F2F2] rounded-full peer-checked:bg-[#007AFF] duration-100 before:absolute before:content-[''] before:size-4 before:bg-white before:rounded-full before:transition-transform before:left-1 before:bottom-1 peer-checked:before:translate-x-4" />
        </label>
        {label && <span className="text-sm">{label}</span>}
      </div>
    );
  }
);

SwitchInput.displayName = "SwitchInput";

export default SwitchInput;
