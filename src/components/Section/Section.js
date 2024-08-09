"use client";
import sessionStyles from "./SectionStyles.module.css";
import informationStyles from "./informationStyles.module.css";
import sobreStyles from "./sobreStyles.module.css";
import tastesStyles from "./tastesStyles.module.css";
import motivationStyles from "./motivationStyles.module.css";
import projectsStyles from "./projectsStyles.module.css";
import Card from "../Card/Card";
import sectionData from "@/data/sectionData";

const Section = ({ currentSection }) => {
  const sectionContent = sectionData[currentSection];

  return (
    <div className={sessionStyles.session}>
      {currentSection === "section1" && (
        <div className={informationStyles.additional_information}>
          <h2>{sectionContent.title}</h2>
          {sectionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a
            className={informationStyles.button}
            href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=drive_link"
            target="_blank"
          >
            {sectionContent.certificatesButton}
          </a>
          <a
            className={informationStyles.button}
            href="https://drive.google.com/file/d/1SNk7sdN6jDRRDpF_n_w4PBEpxEXvZ1IY/view?usp=drive_link "
            target="_blank"
          >
            {sectionContent.resumeButton}
          </a>
          <p>
            Confira meu{" "}
            <a
              href="https://new-portfolio-five-indol.vercel.app/#home"
              target="_blank"
            >
              {sectionContent.portfolioLink}
            </a>
          </p>
        </div>
      )}
      {currentSection === "section2" && (
        <div className={sobreStyles.sobre}>
          <h2>{sectionContent.title}</h2>
          {sectionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSection === "section3" && (
        <div className={tastesStyles.personal_tastes}>
          <h2>{sectionContent.title}</h2>
          {sectionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSection === "section4" && (
        <div className={motivationStyles.motivations}>
          <h2>{sectionContent.title}</h2>
          {sectionContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {currentSection === "section5" && (
        <div className={projectsStyles.projects}>
          <h2>{sectionContent.title}</h2>
          <div className={projectsStyles.container_cards}>
            {sectionContent.cards &&
              sectionContent.cards.map((cardData, index) => (
                <Card
                  key={index}
                  title={cardData.title}
                  image={cardData.image}
                  repoLink={cardData.repoLink}
                  deployLink={cardData.deployLink}
                />
              ))}
          </div>
          <p>
            Você pode conferir meus projetos{" "}
            <a
              href="https://new-portfolio-five-indol.vercel.app/#projects"
              target="_blank"
            >
              Aqui...
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Section;
