import { useState } from 'react';
import styles from './SearchBar.module.css';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
