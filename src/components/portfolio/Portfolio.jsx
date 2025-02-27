import "./portfolio.css";

import IMG1 from "../../assets/chatbot.png";
import IMG2 from "../../assets/crick.png";
import IMG3 from "../../assets/music_recommend.png";
import IMG4 from "../../assets/prison.jpg";
import IMG5 from "../../assets/music_lib.png";
import IMG6 from "../../assets/ems.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Indian Mining Rules Assistant ",
      img: IMG1,
      description:
        "A ChatBot designed to provide real-time information and guidance on mining regulations in India. ",
      technologies: "Python | OpenAI | Langchain | StreamLit",
      github: "https://github.com/Dharun1504/Chatbot-for-Mining-rules-in-India",
    },
    {
      id: 2,
      title: "Cricket Highlights Generator",
      img: IMG2,
      description:
        "Cricket Match Highlight Generator automates the process of generating highlights from full match",
      technologies: "HTML | CSS | React | Express Js | LLM",
      github: "https://github.com/Dharun1504/Sports-highlights",
    },
    {
      id: 3,
      title: "Music Recommendation App",
      img: IMG3,
      description: "A Music Recommendation Application which automates the recommended music by similar taste of music with deep learning",
      technologies: "HTML | CSS | React | Express Js | Node JS | Deep Learning",
      github: "https://github.com/Dharun1504/Cnn-application",
    },
    {
      id: 4,
      title: "Prison Analytics App",
      img: IMG4,
      description:
        "Analytics website which deals with prison data from MongoDB ",
      technologies: "Html | CSS | React | Node Js | Express Js | MongoDB",
      github: "https://github.com/Dharun1504/Prison_analytics_System",
    },
    {
      id: 5,
      title: "Music Library Management System",
      img: IMG5,
      description:
        "A Music Library Management system which holds the songs in database.For Adding,Deleting,Updating song in the database",
      technologies: "Python | MySQL |Tkinter",
      github: "https://github.com/Dharun1504/music-library-management-system",
    },
    {
      id: 6,
      title: "Employee Management System",
      img: IMG6,
      description:
        "Simple Employee Management System which can be used to manage employees .For Adding,Updating,Search,Delete,Pagination",
      technologies: "Html | css | Javascript | React | SpringBoot | PostgreSQL",
      github: "https://github.com/Dharun1504/Employee_Management_System",
    }
  ];

  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
