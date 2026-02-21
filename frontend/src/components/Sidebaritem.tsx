export const Sidebaritem = ({
  title,
  createdAt,
}: {
  title: string;
  createdAt: string;
}) => {
  return (
    <button
      className="w-full text-left border-2  p-4 rounded-none bg-retro-secondary border-retro-border font-bold cursor-pointer text-retro-bg soft-shadow group"
      aria-label={`Open note: ${title}`}
    >
      <h2 className="font-retro text-2xl tracking-wide group-hover:text-retro-accent transition-colors motion-reduce:transition-none">
        {title}
      </h2>
      <p className="text-xs font-mono opacity-80 uppercase mt-1">{createdAt}</p>
    </button>
  );
};
