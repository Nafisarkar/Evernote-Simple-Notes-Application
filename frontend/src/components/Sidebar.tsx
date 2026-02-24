import { PlusIcon } from "@phosphor-icons/react";
import Button from "./Button";
import { Sidebaritem } from "./Sidebaritem";
import Dialog from "./Dialog";
import { useNotes } from "../contexts/notescontext";
import { useState } from "react";

function Sidebar() {
  const { notes, createNote } = useNotes();
  const [createNoteTitle, setCreateNoteTitle] = useState("");

  const createNoteHandler = () => {
    console.log("Creating note with title:", createNoteTitle);
    createNote(createNoteTitle);
    setCreateNoteTitle("");
  };

  return (
    <aside className="w-64 shrink-0 border-2 border-retro-border bg-retro-bg rounded-none flex flex-col p-4 relative ">
      {/* Sidebar head content */}
      <div className="flex gap-4 items-center">
        {notes.length > 0 && (
          <div className="flex flex-row items-center gap-2">
            <h1 className="font-retro text-xl tracking-wide text-retro-fg">
              {notes.length}
            </h1>
            <h1 className="font-retro text-xl tracking-wide text-retro-fg">
              {notes.length === 1 ? "Note" : "Notes"}
            </h1>
          </div>
        )}

        <Dialog
          trigger={
            <Button ariaLabel="Add Note" className="w-full bg-retro-accent ">
              <PlusIcon weight="bold" aria-hidden="true" />
            </Button>
          }
          actionFunction={() => createNoteHandler()}
        >
          <div className="">
            <input
              type="text"
              value={createNoteTitle}
              placeholder="Give a name to your note"
              onChange={(e) => {
                setCreateNoteTitle(e.target.value);
              }}
              className="outline-none focus:outline-none border-2 border-retro-border rounded-none w-full bg-retro-bg text-retro-fg p-2"
            />
          </div>
        </Dialog>
      </div>

      {/* Devider */}
      <div className="border-t-2 border-retro-border my-4 border-dashed" />

      {/* Sidebar body content */}
      <div className="flex flex-col gap-4 overflow-y-auto flex-1  pb-4">
        {/* Example sidebar items */}
        {notes.map((note, i) => (
          <div
            key={i}
            className="animate-slide-in"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <Sidebaritem note={note} />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
