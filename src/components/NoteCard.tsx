import { useState } from "react";
import { updateNote, deleteNote, toggleFavorite, Note } from "@/services/notesService";

interface NoteCardProps {
  note: Note;
  onNoteUpdate: () => void;
}

const COLORS = [
    "bg-yellow-200",
    "bg-orange-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-red-200",
    "bg-indigo-200",
    "bg-teal-200",
    "bg-lime-200",
  ];
  

export default function NoteCard({ note, onNoteUpdate }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const [fixedColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  );

  const handleUpdate = async () => {
    await updateNote(note._id, { title, description });
    setIsEditing(false);
    onNoteUpdate();
  };

  const handleDelete = async () => {
    await deleteNote(note._id);
    onNoteUpdate();
  };

  const handleToggleFavorite = async () => {
    await toggleFavorite(note._id);
    onNoteUpdate();
  };

  return (
    <div className={`relative p-6 rounded-lg shadow-md ${fixedColor} text-black min-h-[200px] flex flex-col`}>
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 text-xl text-yellow-600"
        title="Alternar favorito"
      >
        {note.favorite ? "★" : "☆"}
      </button>

      {isEditing ? (
        <div>
          <input
            className="border border-gray-300 p-2 w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border border-gray-300 p-2 w-full mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={handleUpdate}
          >
            Salvar
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
            <div className="max-h-40 overflow-y-auto">
              <p>{note.description}</p>
            </div>
          </div>
          <div className="flex justify-between mt-auto pt-2">
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={handleDelete}
            >
              🗑️ Excluir
            </button>
            <button
              className="bg-black text-white p-2 rounded"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Editar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
