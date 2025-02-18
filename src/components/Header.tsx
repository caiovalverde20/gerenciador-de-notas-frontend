import SearchBar from "./SearchBar";

interface HeaderProps {
  userName: string;
  onSearch: (query: string) => void;
  onAddNote: () => void;
}

export default function Header({ userName, onSearch, onAddNote }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-black whitespace-nowrap">
          Bem vindo, {userName.split(" ")[0]}!
        </p>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-black">Notas</h1>
        <button
          onClick={onAddNote}
          className="ml-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-800 transition-colors"
          title="Adicionar Nota"
        >
          +
        </button>
      </div>
    </header>
  );
}
