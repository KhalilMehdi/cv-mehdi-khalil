"use client";
import React from "react";
import styles from "./Separator.module.scss";

const Separator: React.FC = () => {
  return (
    <div className={styles.separator}>
      <span className={styles.separator_title}>Formation professionel</span>
    </div>
  );
};

export default Separator;
