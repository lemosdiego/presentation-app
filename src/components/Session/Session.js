"use client";
import sessionStyles from "./sessionStyles.module.css";
import informationStyles from "./informationStyles.module.css";
import sobreStyles from "./sobreStyles.module.css";
import tastesStyles from "./tastesStyles.module.css";
import motivationStyles from "./motivationStyles.module.css";
import projectsStyles from "./projectsStyles.module.css";
import Card from "../Card/Card";
import sessionData from "@/data/session-data";

const Session = ({ currentSession }) => {
  const sessionContent = sessionData[currentSession];

  return (
    <div className={sessionStyles.session}>
      {currentSession === "session1" && (
        <div className={informationStyles.additional_information}>
          <h2>{sessionContent.title}</h2>
          {sessionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <button>{sessionContent.certificatesButton}</button>
          <button>{sessionContent.resumeButton}</button>
          <p>
            Confira meu <a href="">{sessionContent.portfolioLink}</a>
          </p>
        </div>
      )}
      {currentSession === "session2" && (
        <div className={sobreStyles.sobre}>
          <h2>{sessionContent.title}</h2>
          {sessionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSession === "session3" && (
        <div className={tastesStyles.personal_tastes}>
          <h2>{sessionContent.title}</h2>
          {sessionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSession === "session4" && (
        <div className={motivationStyles.motivations}>
          <h2>{sessionContent.title}</h2>
          {sessionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSession === "session5" && (
        <div className={projectsStyles.projects}>
          <h2>{sessionContent.title}</h2>
          <div className={projectsStyles.container_cards}>
            {sessionContent.cards &&
              sessionContent.cards.map((cardData, index) => (
                <Card key={index} {...cardData} />
              ))}
          </div>
          <p>
            Você pode conferir meus projetos <span>Aqui...</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Session;
