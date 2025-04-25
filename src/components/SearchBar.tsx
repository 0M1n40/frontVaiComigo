import { useState } from 'react';
import magnifier from './../assets/magnifier.svg'
import './SearchBar.css'

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
  }

function SearchBar({ placeholder = "", onSearch }: SearchBarProps) {

    const [search, setSearch] = useState("");

    const handleSearch = () => {

        if (search.trim()) {
            console.log('string digitada: ', search)
            onSearch(search);
            setSearch('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) =>
        event.key === 'Enter' && handleSearch();

    return (
    <div className="searchbar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img
        src={magnifier}
        alt="Ícone de pesquisa"
        className="search-icon cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
