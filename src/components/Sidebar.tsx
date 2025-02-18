export default function Sidebar({ onAddNote }: { onAddNote: () => void }) {
    return (
      <aside className="w-20 h-screen bg-white shadow-md flex flex-col items-center py-6">
        <button
          className="mt-10 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
          onClick={onAddNote}
        >
          +
        </button>
      </aside>
    );
  }
  