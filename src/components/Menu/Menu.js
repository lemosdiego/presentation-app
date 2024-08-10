"use client"; // Habilita o modo client-side

import Styles from "./menu.module.css";

const Menu = ({ setCurrentSection }) => {
  return (
    <div className={Styles.container_menu}>
      <nav className={Styles.menu}>
        {/* Botões que mudam a seção ao clicar */}
        <button onClick={() => setCurrentSection("section1")}>Inicio</button>
        <button onClick={() => setCurrentSection("section2")}>Sobre</button>
        <button onClick={() => setCurrentSection("section3")}>Gostos</button>
        <button onClick={() => setCurrentSection("section4")}>
          Motivações
        </button>
        <button onClick={() => setCurrentSection("section5")}>Projetos</button>
      </nav>
    </div>
  );
};

export default Menu;
