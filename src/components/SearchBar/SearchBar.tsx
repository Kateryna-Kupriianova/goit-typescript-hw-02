import { useState, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
