import { useMemo } from "react";
import {
  listsPlugin,
  MDXEditor,
  quotePlugin,
  thematicBreakPlugin,
  tablePlugin,
  markdownShortcutPlugin,
  InsertTable,
  InsertThematicBreak,
  linkPlugin,
  linkDialogPlugin,
  CreateLink,
  ListsToggle,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

import {
  headingsPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
} from "@mdxeditor/editor";

const initialMarkdown =
  "**Bold** _Italic_ [Link](https://example.com)\n\n- List item\n\n> Quote";

function Viewport() {
  const plugins = useMemo(
    () => [
      headingsPlugin(),
      tablePlugin({}),
      listsPlugin(),
      quotePlugin(),
      markdownShortcutPlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      thematicBreakPlugin(),
      toolbarPlugin({
        toolbarClassName: "retro-toolbar brutalist-shadow",
        toolbarContents: () => (
          <>
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <CreateLink />
            <InsertTable />
            <ListsToggle />
            <InsertThematicBreak />
          </>
        ),
      }),
    ],
    [],
  );
  return (
    <main
      className="flex-1 border-2 border-retro-border bg-retro-bg rounded-none overflow-y-auto p-4  relative  animate-slide-in"
      style={{ animationDelay: "0.2s" }}
      aria-label="Note Editor"
    >
      <MDXEditor
        markdown={initialMarkdown}
        placeholder="Type with markdown shortcuts (**, _, -, >, ###, etc.)"
        className="dark-theme"
        contentEditableClassName="prose prose-invert max-w-none prose-headings:font-retro prose-headings:text-retro-primary prose-p:text-retro-accent prose-a:text-retro-secondary hover:prose-a:text-retro-primary prose-strong:text-retro-primary prose-blockquote:border-l-4 prose-blockquote:border-retro-primary prose-blockquote:bg-retro-surface prose-blockquote:not-italic prose-blockquote:px-4 prose-blockquote:py-2 prose-li:marker:text-retro-primary focus:outline-none"
        plugins={plugins}
      />
    </main>
  );
}

export default Viewport;
