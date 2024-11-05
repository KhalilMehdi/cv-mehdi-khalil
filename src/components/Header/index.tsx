import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${
        showHeader ? styles.header_show : styles.header_hide
      }`}
    >
      <nav className={styles.header_navbar}>
        <ul className={styles.header_navbar_navList}>
          <li className={styles.header_navbar_navItem}>
            <a href="#parcours" className={styles.header_navbar_navLink}>
              MON PARCOURS
            </a>
          </li>
          <li className={styles.header_navbar_navItem}>
            <a href="#competence" className={styles.header_navbar_navLink}>
              COMPÉTENCES
            </a>
          </li>
          <li className={styles.header_navbar_navItem}>
            <a href="#contact" className={styles.header_navbar_navLink}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
