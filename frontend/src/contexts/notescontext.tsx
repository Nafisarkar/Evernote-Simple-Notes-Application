import React, { createContext, useContext, useEffect, useState } from "react";
import type { Note } from "../types/notetype";
import { api } from "../lib/api";

type NoteContextType = {
  notes: Note[];
  loading: boolean;
  selectedNote: Note;
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

  useEffect(() => {
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

  return (
    <noteContext.Provider
      value={{
        notes,
        loading,
        selectedNote,
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
