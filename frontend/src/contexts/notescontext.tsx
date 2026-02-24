import React, { createContext, useContext, useEffect, useState } from "react";
import type { Note } from "../types/notetype";
import { api } from "../lib/api";

type NoteContextType = {
  notes: Note[];
  loading: boolean;
  selectedNote: Note;
  createNote: (title: string) => void;
  updateNote: (id: string, description: string) => void;
  noteSelectionHandlerForViewPort: (id: string) => void;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const noteContext = createContext<NoteContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note>({
    _id: "",
    title: "",
    description: "",
    date: "",
    createdAt: "",
    updatedAt: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/all");
      setNotes(res.data.notes);
      console.log("Fetched notes:", res.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [selectedNote._id]);

  const noteSelectionHandlerForViewPort = (id: string) => {
    const noteSelectedToViewInPort =
      notes.find((note) => note._id === id) || null;
    if (noteSelectedToViewInPort) {
      console.log("Selected note:", noteSelectedToViewInPort);
      setSelectedNote(noteSelectedToViewInPort);
    }
  };

  const createNote = async (title: string) => {
    try {
      const res = await api.post("/add", {
        title,
        description: "",
      });
      fetchNotes();
      console.log("Created note:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateNote = async (id: string, description: string) => {
    try {
      const res = await api.patch(`/${id}`, { description });

      // Update local state without refetching
      setNotes((prev) =>
        prev.map((note) =>
          note._id === id
            ? { ...note, description, updatedAt: new Date().toISOString() }
            : note,
        ),
      );

      setSelectedNote((prev) =>
        prev._id === id
          ? { ...prev, description, updatedAt: new Date().toISOString() }
          : prev,
      );

      console.log("Updated note:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <noteContext.Provider
      value={{
        notes,
        loading,
        selectedNote,
        createNote,
        updateNote,
        setNotes,
        noteSelectionHandlerForViewPort,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => {
  const context = useContext(noteContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
