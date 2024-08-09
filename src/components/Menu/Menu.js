"use client"; // Habilita o modo client-side

import Styles from "./menu.module.css";

const Menu = ({ setCurrentSession }) => {
  return (
    <nav className={Styles.menu}>
      {/* Botões que mudam a sessão ao clicar */}
      <button onClick={() => setCurrentSession("session1")}>Inicio</button>
      <button onClick={() => setCurrentSession("session2")}>Sobre</button>
      <button onClick={() => setCurrentSession("session3")}>Gostos</button>
      <button onClick={() => setCurrentSession("session4")}>Motivações</button>
      <button onClick={() => setCurrentSession("session5")}>Projetos</button>
    </nav>
  );
};

export default Menu;
