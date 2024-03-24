import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ search, onSearch, children }) {
  const searchId = useId();
  return (
    <div className={css.box}>
      <label htmlFor={searchId}>{children}</label>
      <input
        className={css.searchString}
        type="text"
        name="search"
        id={searchId}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
