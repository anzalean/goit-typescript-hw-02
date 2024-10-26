import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './SearchBar.module.css';
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={search}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
