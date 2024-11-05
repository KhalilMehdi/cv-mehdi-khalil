import React from "react";
import styles from "./FormationCards.module.scss";

interface Skill {
  id: number;
  text: string;
  icon: string;
}

interface Formation {
  title: string;
  description: string;
  date: string;
  skills: Skill[];
}

interface FormationCardsProps {
  formations: Formation[];
}

const FormationCards: React.FC<FormationCardsProps> = ({ formations }) => {
  return (
    <div className={styles.formationCards}>
      {formations.map((formation, index) => {
        const { title, description, date, skills } = formation;

        return (
          <article key={index} className={styles.formationCards_card}>
            <div className={styles.formationCards_card_leftContainer}>
              <div className={styles.formationCards_card_leftContainer_content}>
                <h3 className={styles.formationCards_card_leftContainer_title}>
                  {title}
                </h3>
                <p className={styles.formationCards_card_leftContainer_date}>
                  {date}
                </p>
                <p
                  className={
                    styles.formationCards_card_leftContainer_description
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className={styles.formationCards_card_rightContainer}>
              <div className={styles.formationCards_card_rightContainer_skill}>
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={
                      styles.formationCards_card_rightContainer_skill_item
                    }
                  >
                    <img
                      src={skill.icon}
                      alt={`Icône de compétence: ${skill.text}`}
                      className={
                        styles.formationCards_card_rightContainer_skill_icon
                      }
                    />
                    <p>{skill.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FormationCards;
