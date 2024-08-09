"use client"; // Habilita o modo client-side

import Styles from "./menu.module.css";

const Menu = ({ setCurrentSession }) => {
  return (
    <nav className={Styles.menu}>
      {/* Botões que mudam a sessão ao clicar */}
      <button onClick={() => setCurrentSession("session1")}>Session 1</button>
      <button onClick={() => setCurrentSession("session2")}>Session 2</button>
      <button onClick={() => setCurrentSession("session3")}>Session 3</button>
      <button onClick={() => setCurrentSession("session4")}>Session 4</button>
      <button onClick={() => setCurrentSession("session5")}>Session 5</button>
    </nav>
  );
};

export default Menu;
