function Viewport() {
  return (
    <main
      className="flex-1 border-2 border-retro-border bg-retro-bg rounded-none overflow-y-auto p-4  relative  animate-slide-in"
      style={{ animationDelay: "0.2s" }}
      aria-label="Note Editor"
    >
      <label className="sr-only" htmlFor="note-body">
        Note body
      </label>
      <textarea
        id="note-body"
        placeholder="Start typing your note..."
        className="w-full h-full min-h-[60vh] bg-retro-surface text-retro-accent border-2 border-retro-border soft-shadow rounded-none p-4 font-retro-body leading-relaxed focus:outline-none focus:border-retro-primary focus:ring-0"
      />
    </main>
  );
}

export default Viewport;
