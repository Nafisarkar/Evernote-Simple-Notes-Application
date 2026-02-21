const Button = ({
  handler,
  children,
  ariaLabel,
}: {
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  ariaLabel?: string;
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className="bg-retro-accent text-retro-bg p-2 flex items-center justify-center gap-2 rounded-none w-full border-2 border-retro-bg cursor-pointer brutalist-shadow transition-transform motion-reduce:transition-none"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
