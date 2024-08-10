"use client";
import StylesHeader from "./StylesHeader.module.css";

const Header = () => {
  function abrirMenu() {
    const header = document.querySelector("#header");
    const fechar = document.querySelector("#fechar");
    const abrir = document.querySelector("#abrir");

    header.style.display = "flex";
    fechar.style.display = "block";
    abrir.style.display = "none";
  }
  function fecharMenu() {
    const header = document.querySelector("#header");
    const fechar = document.querySelector("#fechar");
    const abrir = document.querySelector("#abrir");

    header.style.display = "none";
    fechar.style.display = "none";
    abrir.style.display = "block";
  }
  return (
    <>
      <div className={StylesHeader.container_menu}>
        <div className={StylesHeader.icon}>
          <img src="/img/codigocerto.png" alt="Icone codigo certo" />
        </div>
        <p className={StylesHeader.abrir} id="abrir" onClick={abrirMenu}>
          Menu
        </p>
        <p className={StylesHeader.fechar} id="fechar" onClick={fecharMenu}>
          Fechar
        </p>
      </div>
      <header className={StylesHeader.header} id="header">
        <nav className={StylesHeader.nav}>
          <ul>
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Gostos</li>
            <li>Motivações</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
