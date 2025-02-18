interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md text-black"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  