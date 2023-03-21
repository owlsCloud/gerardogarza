import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Gamenight",
        client: "UTRGV",
        language: "React, Tailwindcss, nodejs",
        preview: "https://github.com/snipergz/GameNight",
        link: "https://github.com/snipergz/GameNight",
      },
    ],
  },
  {
    id: 2,
    type: "project",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Spotify API",
        client: "Gerardo",
        language: "react SASS",
        preview: "https://spotifyvisual.netlify.app",
        link: "https://github.com/owlsCloud/spotify-visual-back",
      },
    ],
  },
  {
    id: 3,
    type: "project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Andrea",
        language: " nextjs, SASS",
        preview: "https://adphotography.netlify.app",
        link: "",
      },
    ],
  },
  {
    id: 4,
    type: "local project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "website",
        client: "Gerardo",
        language: "nextjs, SASS",
        preview: "https://hbomax-clone.netlify.app/create",
        link: "https://github.com/owlsCloud/hbomax-clone",
      },
    ],
  },
];

export default PortfolioData;
