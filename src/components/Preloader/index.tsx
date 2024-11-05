import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      gsap.to(`.${styles.preloader}`, {
        y: "-100%",
        duration: 1,
        ease: "power2.in",
      });
    }
  }, [progress]);

  return (
    <div className={styles.preloader}>
      <div className={styles.progress}>{progress}%</div>
    </div>
  );
};

export default Preloader;
