const sizeClasses = {
  default: "px-4 py-2",
  icon: "w-10 h-10 flex items-center justify-center",
};

type ButtonProps = {
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  ariaLabel?: string;
  size?: keyof typeof sizeClasses;
  className?: string;
};

const Button = ({
  handler,
  children,
  ariaLabel,
  size = "default",
  className = "",
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={` text-retro-bg p-2 flex items-center justify-center gap-2 rounded-none border-2 border-retro-border cursor-pointer soft-shadow transition-colors motion-reduce:transition-none  ${sizeClasses[size]}
        ${className}`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
