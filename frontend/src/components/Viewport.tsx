import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  type MDXEditorMethods,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useNotes } from "../contexts/notescontext";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, SpinnerIcon } from "@phosphor-icons/react";
import debounce from "lodash/debounce";
function Viewport() {
  const { loading, notes, selectedNote, updateNote } = useNotes();
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "error">(
    "saved",
  );

  const editorRef = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    if (editorRef.current && selectedNote._id) {
      const currentMarkdown = editorRef.current.getMarkdown();
      // Only update if the ID changed to prevent overwriting
      // the content while the user is typing.
      if (currentMarkdown !== selectedNote.description) {
        editorRef.current.setMarkdown(selectedNote.description);
      }
    }
    // Change dependency to ._id so it doesn't run on every description update
  }, [selectedNote._id]);

  const debouncedSave = useRef(
    debounce(async (id: string, content: string) => {
      try {
        setSaveStatus("saving");
        await updateNote(id, content);
        setSaveStatus("saved");
      } catch {
        setSaveStatus("error");
      }
    }, 100),
  ).current;

  return (
    <main
      className="flex-1 border-2 border-retro-border bg-retro-bg rounded-none overflow-y-auto p-4  relative  animate-slide-in"
      style={{ animationDelay: "0.2s" }}
      aria-label="Note Editor"
    >
      {!loading && notes.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-retro-fg text-lg">
            No notes found. Click the + button to create your first note!
          </p>
        </div>
      ) : null}

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-retro-fg text-lg animate-spin ">
            <SpinnerIcon size={32} />
          </p>
        </div>
      ) : null}

      <MDXEditor
        ref={editorRef}
        markdown={selectedNote.description || ""}
        onChange={(content) => {
          // Only trigger if there is a valid note selected
          if (selectedNote._id) {
            setSaveStatus("saving"); // Show saving immediately for better UX
            debouncedSave(selectedNote._id, content);
          }
        }}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
        ]}
        contentEditableClassName="outline-none min-h-screen max-w-none prose prose-invert prose-retro text-white leading-snug prose-p:my-1 prose-headings:my-2 prose-li:my-0 prose-ul:my-1 prose-ol:my-1 prose-headings:text-white prose-p:text-white prose-strong:text-white prose-li:text-white prose-headings:font-retro prose-headings:tracking-wide prose-blockquote:border-l-4 prose-blockquote:border-retro-border prose-blockquote:bg-retro-secondary prose-blockquote:p-1 prose-blockquote:rounded-none prose-blockquote:italic prose-blockquote:before:content-['“'] prose-blockquote:before:absolute prose-blockquote:before:-left-2 prose-blockquote:before:-top-2 prose-blockquote:before:text-4xl prose-blockquote:before:text-retro-border prose-blockquote:before:opacity-50"
      />
      {/* Save status indicator */}
      <div className="absolute top-4 right-4">
        {saveStatus === "saved" && (
          <CheckIcon size={24} className="text-green-500" />
        )}
        {saveStatus === "saving" && (
          <SpinnerIcon size={24} className="text-yellow-400 animate-spin" />
        )}
        {saveStatus === "error" && (
          <CheckIcon size={24} className="text-red-500 rotate-45" />
        )}
      </div>
    </main>
  );
}

export default Viewport;
