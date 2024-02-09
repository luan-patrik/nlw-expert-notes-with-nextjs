"use client";

import { useEffect, useState } from "react";
import { NewNoteCard, NoteCard, Search } from ".";

interface NoteProps {
  id: string;
  date: Date;
  content: string;
}

export const AllNotesCard = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const notesOnLocalStorage = localStorage.getItem("notes");
    if (notesOnLocalStorage) {
      try {
        setNotes(JSON.parse(notesOnLocalStorage));
      } catch (error) {
        console.error("Falha ao carregar as anotações: ", error);
      }
    }
  }, []);

  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (id: string) => {
    const notesArray = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content
            .toLocaleLowerCase()
            .trim()
            .includes(search.toLocaleLowerCase().trim())
        )
      : notes;

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            handleDeleteNote={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </>
  );
};
