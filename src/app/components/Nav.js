"use client";

import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="resnav">
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link className={ `${styles.navbarLink} ${styles.reshome}`} href="/">
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={ `${styles.navbarLink} ${styles.resabout}`} href="/about">
                About
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={ `${styles.navbarLink} ${styles.resmovie}`} href="/movies">
                Movie
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={ `${styles.navbarLink} ${styles.rescontact}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
