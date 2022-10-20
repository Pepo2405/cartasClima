import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import styles from "../styles/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={Logo} alt={"henryLogo"}/>
        <h3>Henry Weather</h3>
      </div>

      <SearchBar onSearch={onSearch}></SearchBar>
    </nav>
  );
}

export default Nav;
