"use client";
import { useEffect, useState, useCallback } from "react";
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

  const loadNotes = useCallback(async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleCreate = useCallback(async () => {
    try {
      await createNote({ title: "Nova Nota", description: "", favorite: false });
      loadNotes();
    } catch {
      router.push("/login");
    }
  }, [loadNotes, router]);

  return (
    <div className="flex flex-col p-4 md:p-6 min-h-screen bg-gray-100">
      {user && (
        <Header userName={user.name} onSearch={setSearchQuery} onAddNote={handleCreate} />
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