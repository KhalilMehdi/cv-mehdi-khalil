import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import styles from "./ExperienceSlider.module.scss";

interface Skill {
  id: number;
  icon: string;
  text: string;
}

interface Experience {
  title: string;
  description: string;
  date: string;
  videoSource?: string;
  skills: Skill[];
}

interface ExperienceSliderProps {
  experiences: Experience[];
}

const ExperienceSlider = ({ experiences }: ExperienceSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, EffectCoverflow]}
      className={styles.experienceSlider}
      spaceBetween={50}
      slidesPerView={1}
      speed={1500}
      effect="coverflow"
      grabCursor={false}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
    >
      {experiences.map((experience, index) => (
        <SwiperSlide key={index}>
          <div className={styles.experienceSlider_slide}>
            <div className={styles.experienceSlider_slide_leftContainer}>
              <div
                className={styles.experienceSlider_slide_leftContainer_content}
              >
                <p
                  className={styles.experienceSlider_slide_leftContainer_title}
                >
                  {experience.title}
                </p>
                <p className={styles.experienceSlider_slide_leftContainer_date}>
                  {experience.date}
                </p>
                <p
                  className={
                    styles.experienceSlider_slide_leftContainer_description
                  }
                >
                  {experience.description}
                </p>
                <div
                  className={styles.experienceSlider_slide_leftContainer_skill}
                >
                  {experience.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className={
                        styles.experienceSlider_slide_leftContainer_skill_item
                      }
                    >
                      <img
                        src={skill.icon}
                        alt={skill.text}
                        className={
                          styles.experienceSlider_slide_leftContainer_skill_icon
                        }
                      />
                      <p>{skill.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.experienceSlider_slide_rightContainer}>
              <video
                className={styles.experienceSlider_slide_rightContainer_video}
                src={experience.videoSource}
                autoPlay
                muted
                loop
              >
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExperienceSlider;
