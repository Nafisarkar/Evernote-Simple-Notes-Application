import { useNotes } from "../contexts/notescontext";
import type { Note } from "../types/notetype";

type SidebarItemProps = {
  note: Note;
};

export const Sidebaritem = ({ note }: SidebarItemProps) => {
  const { noteSelectionHandlerForViewPort } = useNotes();

  return (
    <button
      className="w-full text-left border-2  p-4 rounded-none bg-retro-secondary border-retro-border font-bold cursor-pointer text-retro-bg soft-shadow group"
      aria-label={`Open note: ${note.title}`}
      onClick={() => noteSelectionHandlerForViewPort(note._id)}
    >
      <h2 className="font-retro text-2xl tracking-wide group-hover:text-retro-accent transition-colors motion-reduce:transition-none">
        {note.title}
      </h2>
      <p className="text-xs font-mono opacity-80 uppercase mt-1">
        {new Date(note.updatedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </button>
  );
};
