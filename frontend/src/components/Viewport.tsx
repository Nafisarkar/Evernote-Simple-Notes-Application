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
import { useEffect, useRef } from "react";
import { SpinnerIcon } from "@phosphor-icons/react";

function Viewport() {
  const { loading, notes, selectedNote } = useNotes();
  const editorRef = useRef<MDXEditorMethods>(null);
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setMarkdown(selectedNote.description);
      console.log("Updated editor content with selected note description");
    }
  }, [selectedNote]);

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
        markdown={""}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
        ]}
        contentEditableClassName="outline-none min-h-screen max-w-none prose prose-invert prose-retro text-white leading-snug prose-p:my-1 prose-headings:my-2 prose-li:my-0 prose-ul:my-1 prose-ol:my-1 prose-headings:text-white prose-p:text-white prose-strong:text-white prose-li:text-white prose-headings:font-retro prose-headings:tracking-wide prose-blockquote:border-l-4 prose-blockquote:border-retro-border prose-blockquote:bg-retro-secondary prose-blockquote:p-1 prose-blockquote:rounded-none prose-blockquote:italic prose-blockquote:before:content-['“'] prose-blockquote:before:absolute prose-blockquote:before:-left-2 prose-blockquote:before:-top-2 prose-blockquote:before:text-4xl prose-blockquote:before:text-retro-border prose-blockquote:before:opacity-50"
      />
    </main>
  );
}

export default Viewport;
