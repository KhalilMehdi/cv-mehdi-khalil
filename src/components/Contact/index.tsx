import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./Contact.module.scss";

gsap.registerPlugin(ScrollToPlugin);

interface ContactProps {
  lastName: string;
  greetings: string;
  copyright: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

const Contact: React.FC<ContactProps> = ({
  lastName,
  greetings,
  copyright,
  contact,
}) => {
  const handleScrollTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  const { email, phone, linkedin, github } = contact;

  return (
    <section className={styles.contact}>
      <div className={styles.contact_leftContainer}>
        <div className={styles.contact_leftContainer_description}>
          <h2>{greetings}</h2>
          <a href="/cv-mehdi-khalil.pdf" download>
            <button
              className={styles.contact_leftContainer_description_download}
            >
              Télécharger mon CV
            </button>
          </a>
        </div>
        <footer className={styles.contact_leftContainer_footer}>
          <img
            className={styles.contact_leftContainer_footer_topArrow}
            src="/svg/top-arrow.svg"
            alt="Scroll to top"
            role="button"
            onClick={handleScrollTop}
          />
          <h3>{copyright}</h3>
        </footer>
      </div>
      <div className={styles.contact_rightContainer}>
        <div className={styles.contact_rightContainer_socialsContainer}>
          <table>
            <tbody>
              {[
                {
                  label: "Email",
                  value: <a href={`mailto:${email}`}>{email}</a>,
                },
                {
                  label: "Téléphone",
                  value: <a href={`tel:${phone}`}>{phone}</a>,
                },
                {
                  label: "LinkedIn",
                  value: (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mon LinkedIn
                    </a>
                  ),
                },
                {
                  label: "GitHub",
                  value: (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      Mon GitHub
                    </a>
                  ),
                },
              ].map(({ label, value }) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td
                    className={
                      styles.contact_rightContainer_socialsContainer_link
                    }
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.contact_rightContainer_nameContainer}>
          <h1>{lastName}</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
