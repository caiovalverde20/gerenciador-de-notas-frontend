interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <div className="w-full flex items-center justify-center px-6 py-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 text-black placeholder-gray-400"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  