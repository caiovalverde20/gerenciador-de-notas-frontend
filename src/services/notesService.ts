import api from "@/services/api";

export interface Note {
    _id: string;
    title: string;
    description: string;
  }

export const fetchNotes = async (): Promise<Note[]> => {
    const res = await api.get("/notes");
    return res.data;
};

export const createNote = async (note: Omit<Note, "_id">): Promise<Note> => {
    const res = await api.post("/notes", note);
    return res.data;
    };

  export const updateNote = async (id: string, note: Partial<Note>): Promise<Note> => {
    const res = await api.patch(`/notes/${id}`, note);
    return res.data;
};

export const deleteNote = async (id: string): Promise<void> => {
    await api.delete(`/notes/${id}`);
};