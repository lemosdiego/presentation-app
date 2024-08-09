import { useState } from "react";
import Styles from "./card.module.css";

export const Card = ({ title, description, image, repoLink, deployLink }) => {
  const [showContent, setShowContent] = useState(false);

  function hoverCard() {
    setShowContent(true);
  }

  function leaveCard() {
    setShowContent(false);
  }

  return (
    <div
      className={Styles.container_card}
      onMouseEnter={hoverCard}
      onMouseLeave={leaveCard}
      style={{ backgroundImage: `url(${image})` }}
    >
      {showContent && (
        <>
          <h3>{title}</h3>
          <div className={Styles.cardButtons}>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
