const cvData = {
  firstName: "mehdi",
  lastName: "khalil",
  title: "« Les artisans du web façonnent le monde un pixel à la fois. »",
  about: `Développeur web Full-Stack passionné, avec une expertise en React et Laravel, je mets à profit mon expérience pour offrir des solutions innovantes.`,
  greetings:
    "Merci d'avoir pris le temps de lire mon CV. Si vous avez des questions ou souhaitez discuter de mes compétences, n'hésitez pas à m'envoyer un message !",
  experiences: [
    {
      title: "Azerion",
      role: "Développeur Web Full-Stack / UX Designer (Alternance)",
      description: `Double rôle en tant que développeur Web Full-Stack et UX Designer au sein d'une équipe Scrum.
                    Mon principal objectif était de contribuer au développement du back-office de l'entreprise en utilisant les frameworks React et Laravel.`,
      date: "2021 - 2023",
      skills: [
        { id: 1, text: "React", icon: "/svg/react.svg" },
        { id: 2, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 3, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 4, text: "Développement", icon: "/svg/react.svg" },
      ],
      videoSource: "/videos/azerion.mp4",
    },
    {
      title: "Pièces2Mobile",
      role: "Webmaster (Alternance)",
      description: `Pendant cette expérience en alternance, j'ai exercé en tant que webmaster.
                    J'ai travaillé sur un site e-commerce créé avec le framework Magento. Mon rôle était de mettre en ligne les différents produits et de les photographier.`,
      date: "2019 - 2020",
      skills: [
        { id: 5, text: "Recherche", icon: "/svg/react.svg" },
        { id: 6, text: "Développement", icon: "/svg/laravel.svg" },
        { id: 7, text: "Recherche", icon: "/svg/laravel.svg" },
        { id: 8, text: "Développement", icon: "/svg/react.svg" },
      ],
      videoSource: "/videos/test-video.mp4",
    },
  ],
  formations: [
    {
      title: "ECV Digital",
      role: "Master en Développement Web",
      description: `Double rôle en tant que développeur Web Full-Stack et UX Designer au sein d'une équipe Scrum.
                    Mon principal objectif était de contribuer au développement du back-office de l'entreprise en utilisant les frameworks React et Laravel.`,
      date: "2021 - 2023",
      skills: [
        { id: 9, text: "React", icon: "/svg/react.svg" },
        { id: 10, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 11, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 12, text: "Développement", icon: "/svg/react.svg" },
      ],
    },
    {
      title: "IUT Cergy",
      role: "Master en Développement Web",
      description: `Double rôle en tant que développeur Web Full-Stack et UX Designer au sein d'une équipe Scrum.
                    Mon principal objectif était de contribuer au développement du back-office de l'entreprise en utilisant les frameworks React et Laravel.`,
      date: "2021 - 2023",
      skills: [
        { id: 9, text: "React", icon: "/svg/react.svg" },
        { id: 10, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 11, text: "Laravel", icon: "/svg/laravel.svg" },
        { id: 12, text: "Développement", icon: "/svg/react.svg" },
      ],
    },
  ],

  education: [
    {
      institution: "ECV Digital",
      degree: "Master en Développement Web",
      date: "2021 - 2023",
      description: `Au cours de mon Master en développement web, j'ai acquis une expertise en langages web, conception d'interfaces, gestion de bases de données,
                    adaptation à des environnements variés, coordination d'équipes et prise de décisions techniques.`,
    },
    {
      institution: "IUT Cergy-Pontoise",
      degree: "Licence Pro en entrepreneuriat et métiers du numérique",
      date: "2019 - 2020",
      description: `Durant cette licence, j'ai acquis des compétences en informatique industrielle, modélisation 3D, gestion de projets, et facilitation. Mon programme m'a
                    préparé à être un acteur clé dans le développement et la gestion de projets innovants au sein des entreprises.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML & CSS",
    "SASS",
    "MariaDB",
    "MySQL",
    "Docker",
    "Git",
    "Jira",
    "Figma",
  ],
  hobbies: ["Street Workout", "Echecs", "Jeux de cartes (TCG)"],
  contact: {
    email: "mehdi.khalil.pro@gmail.com",
    phone: "06 01 33 58 89",
    linkedin: "https://linkedin.com/in/mehdi-khalil-web-dev",
    github: "",
  },
  info: [
    {
      key: "Développeur Web Full-Stack / UX Designer (Alternance)",
      value: "Azerion (Paris 9ème) - 2021 / 2023",
      description:
        "Double rôle en tant que développeur Web Full-Stack et UX Designer au sein d'une équipe Scrum. Mon principal objectif était de contribuer au développement du back-office de l'entreprise en utilisant les frameworks React et Laravel.",
    },
    {
      key: "Webmaster (Alternance)",
      value: "Pièces2Mobile (Gennevilliers) - 2019 / 2020",
      description:
        "Pendant cette expérience en alternance, j'ai exercé en tant que webmaster. J'ai travaillé sur un site e-commerce créé avec le framework Magento 2. Mon rôle était de mettre en ligne les différents produits et de les photographier.",
    },
  ],
  info2: [
    {
      key: "Mastère Développement Web",
      value: "ECV Digital (Paris 11ème) - 2021 / 2023",
      description:
        "Au cours de mon Mastère en développement web, j'ai acquis une expertise en langages web, conception d'interfaces, gestion de bases de données, adaptation à des environnements variés, coordination d'équipes et prise de décisions techniques.",
    },
    {
      key: "Webmaster (Alternance)",
      value: "IUT Cergy-Pontoise - 2019 / 2020",
      description:
        "Durant cette licence j ai acquis des compétences informatique industrielle, modélisation 3D, gestion de projets, et facilitation. Mon programme m'a préparé à être un acteur clé dans le développement et la gestion de projets innovants au sein des entreprises.",
    },
  ],
  copyright: "© 2023 Mehdi Khalil. All rights reserved",
};

export default cvData;
