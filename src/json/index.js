export const greeting = {
  intro: "Hi, I'm",
  name: "SEMLALI Othman",
  company: "My company",
  school: "ISTA NTIC2 Casablanca",
  companyURL: "#",
  subtitle: "My subtitle",
  copy: "I'm a student at",
  subCopy: "Junior Full stack web developer",
  // on a journey towards becoming an expert in building end-to-end web solutions using modern technologies
};

export const info = {
  github: "https://github.com/OthmanSemlali",
  linkedin: "https://www.linkedin.com/in/othman-semlali-dev/",
  instagram: "https://www.instagram.com/uthmeene/",
};

export const formationPage = {
  title: "Formation & Certifications.",
  subTitle: "Discover What I've Achieved and Where I've Studied",
};

export const projectsPage = {
  title: "Projects.",
  subTitle: "Discover My Skills and Expertise Through My Work",
};

export const contactPage = {
  title: "Hello.",
  subTitle: "Don't let your ideas get lost in the void. ",
  subCopy: "Contact me and let's bring them to life!",
};
export const projects = [
  {
    title: "Bookyreview",
    classes: "featured feature-1",
    description:
      "BookyReview is a complete, end-to-end blog CMS project that allows users to share and discover book reviews. With a user-friendly interface, this platform provides a space for book lovers to connect and express their thoughts on the books they have read.",
    techList: ["PHP", "MySQL", "jQuery", "CSS"],
    img: "https://bookyreview.space/admin/upload/logo.png",
    siteLink: "https://bookyreview.space/",
    codeLink: "https://github.com/OthmanSemlali/BookyReview-BLOG",
    featured: true,
    soon: false,
  },
  {
    title: "ShareProjects",
    classes: "project",
    description:
      "ShareProjects is a website that allows users to create profiles and share their projects with other users. ",
    techList: ["PHP", "MVC", "JQuery", "Bootstrap5"],
    img: "https://bookyreview.space/admin/upload/php.png",
    codeLink: null,
    siteLink: null,
    featured: false,
    soon: true,
  },
  {
    title: "KeepReading",
    classes: "project",
    description:
      "E-commerce platform for selling books. The platform features a comprehensive catalog of books..",
    techList: ["React.js", "Emotion", "API", "PHP"],
    img: "https://bookyreview.space/admin/upload/reactjs.png",
    codeLink: null,
    siteLink: null,
    featured: false,
    soon: true,
  },
];

export const formations = [
  {
    school: " ISTA NTIC2",
    dates: "2021 — Current",
    // position: "My position",
    copy: "The OFPPT Institute is a renowned technical and professional training institution in Morocco that offers a range of programs. I was honored to be a part of the Full Stack Web Development option as a full stack web developer. During my time at the OFPPT Institute, I deepened my knowledge and understanding of web development, and sharpened my skills in both back-end programming and front-end programming, as well as in agile methodologies and design tools.",
    // jobFeatures: ["feature1", "feature2"],
    open: true,
  },
];

export const certifications = [
  {
    title: "Learn MongoDB Course",
    dates: "February 2023",
    organism: "Codecademy",
    copy: null,
    link: "https://www.codecademy.com/profiles/othmansemlali/certificates/808a989d563e4e85ba3495d4d14dce5d",
    skills: [
      "Database Basics",
      "MongoDB CRUD",
      "MongoDB Indexing",
      "MongoDB Aggregation",
    ],
    open: true,
  },
  {
    title: "AJAX Fundamentals",
    dates: "October 2022",
    organism: "Udemy",
    copy: null,
    link: "https://www.udemy.com/certificate/UC-68a0119f-b03a-4973-84a2-eb04c4a80dea/",
    skills: [
      "HTTP protocol",
      "JSON",
      "XML",
      "Handling errors with AJAX",
      "Async & Await keywords",
      "Promises",
    ],
    open: false,
  },
  {
    title: "Microsoft Office Specialist",
    dates: "March 2022",
    organism: "Certiport",
    copy: null,
    link: "https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=250&cvid=O040TUm6yEuCoy/URyllGQ==",
    skills: ["Office Word 2016"],
    open: false,
  },
  {
    title: "PHP et MySQL la formation ULTIME",
    dates: "March 2022",
    organism: "Udemy",
    copy: null,
    link: "https://www.udemy.com/certificate/UC-ce794788-ddb2-4140-aa8b-154ebae1058c/",
    skills: ["PHP", "MySQL"],
    open: false,
  },
];

export const ErrorData = {
  title: "404 Error.",
  subTitle:
    "Houston, we've landed on a 404 Error. Please bring us back to Earth.",
  LinkHome: true,
};
