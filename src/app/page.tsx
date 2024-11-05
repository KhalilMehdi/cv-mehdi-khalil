"use client";
import React from "react";
import CustomCursor from "@components/CustomCursor";
import Header from "@components/Header";
import Home from "@components/Home";
import Contact from "@components/Contact";
import cvData from "@data/cvData";
import ExperienceSlider from "@components/ExperienceSlider";
import FormationCards from "@components/FormationCards";
import Separator from "@components/Separator";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <CustomCursor />
        <Header />
        <Home
          firstName={cvData.firstName}
          about={cvData.about}
          title={cvData.title}
        />
        <ExperienceSlider experiences={cvData.experiences} />
        <FormationCards formations={cvData.formations} />
        <Contact
          lastName={cvData.lastName}
          greetings={cvData.greetings}
          copyright={cvData.copyright}
          contact={cvData.contact}
        />
      </main>
    </>
  );
};

export default Main;
