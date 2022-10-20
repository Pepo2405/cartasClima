import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [value, setInput] = useState("");
  return (
    <form className={styles.SearchBar} onSubmit={(e)=>e.preventDefault()}>
      <input placeholder="Ciudad" className={styles.input} type={"text"} onChange={(e)=>setInput(e.target.value)}/>
      <button className={styles.button} onClick={() => onSearch(value)}>
        🌎
      </button>
    </form>
  );
}
