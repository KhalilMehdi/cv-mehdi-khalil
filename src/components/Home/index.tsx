import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./Home.module.scss";

gsap.registerPlugin(ScrollToPlugin);

interface HomeProps {
  firstName: string;
  about: string;
  title: string;
}

const Home: React.FC<HomeProps> = ({ firstName, about, title }) => {
  const handleScrollDown = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: window.innerHeight },
      ease: "power2.inOut",
    });
  };

  return (
    <section className={styles.home}>
      <div className={styles.home_nameContainer}>
        <h1>{firstName}</h1>
      </div>
      <div className={styles.home_descriptionContainer}>
        <h2>{about}</h2>
        <div className={styles.home_descriptionContainer_footer}>
          <h3>{title}</h3>
          <img
            className={styles.home_descriptionContainer_footer_downArrow}
            src="/svg/down-arrow.svg"
            alt="Scroll down"
            onClick={handleScrollDown}
            role="button"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
