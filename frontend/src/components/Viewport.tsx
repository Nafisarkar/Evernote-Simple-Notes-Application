import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

function Viewport() {
  return (
    <main
      className="flex-1 border-2 border-retro-border bg-retro-bg rounded-none overflow-y-auto p-4  relative  animate-slide-in"
      style={{ animationDelay: "0.2s" }}
      aria-label="Note Editor"
    >
      <MDXEditor
        markdown="hello world"
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
