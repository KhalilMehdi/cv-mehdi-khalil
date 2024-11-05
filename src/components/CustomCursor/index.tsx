"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./CustomCursor.module.scss";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(
      `.${styles.customCursor}`
    ) as HTMLElement;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0.2 });
    };

    const onMouseEnter = () => {
      cursor?.classList.add(styles.hover);
    };

    const onMouseLeave = () => {
      cursor?.classList.remove(styles.hover);
    };

    const onClick = () => {
      cursor.classList.add(styles.active);
      setTimeout(() => {
        cursor.classList.remove(styles.active);
      }, 200);
    };

    const clickables = document.querySelectorAll("a, button, [role='button']");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className={`${styles.customCursor}`}></div>
    </>
  );
};

export default CustomCursor;
