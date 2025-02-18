"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchNotes, createNote, Note } from "@/services/notesService";
import NoteCard from "@/components/NoteCard";
import Header from "@/components/Header";
import { useUser } from "../hooks/useUser";

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const user = useUser();
  const router = useRouter();

  const loadNotes = async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreate = async () => {
    try {
      await createNote({
          title: "Nova Nota", description: "",
          favorite: false
      });
      loadNotes();
    } catch (error: any) {
      if (error.response?.status === 401) {
        router.push("/login");
      }
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-6 min-h-screen bg-gray-100">
      {user && (
        <Header
          userName={user.name}
          onSearch={setSearchQuery}
          onAddNote={handleCreate}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes
          .filter(
            (note) =>
              note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              note.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((note) => (
            <NoteCard key={note._id} note={note} onNoteUpdate={loadNotes} />
          ))}
      </div>
    </div>
  );
}
