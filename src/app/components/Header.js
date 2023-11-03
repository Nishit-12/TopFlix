import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}></div>

        <Nav />
      </header>
    </>
  );
};

export default Header;
