"use client";
import { useEffect, useState } from "react";
import StylesHeader from "./StylesHeader.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const abrirMenu = () => {
    setIsMenuOpen(true);
  };

  const fecharMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={StylesHeader.container_menu}>
        <div className={StylesHeader.menu}>
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
        <div className={StylesHeader.media}>
          <div className={StylesHeader.icons}>
            <img src="icons/whats.svg" alt="Icone Whatsapp" />
          </div>
          <div className={StylesHeader.icons}>
            <img src="icons/linkedin.svg" alt="Icone LinkedIn" />
          </div>
          <div className={StylesHeader.icons}>
            <img src="icons/github.svg" alt="Icone GitHub" />
          </div>
          <div className={StylesHeader.icons}>
            <img src="icons/insta.svg" alt="Icone Instagram" />
          </div>
        </div>
      </div>
      <header
        className={StylesHeader.header}
        id="header"
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <nav className={StylesHeader.nav}>
          <ul>
            <li onClick={fecharMenu}>
              <a href="#inicio">Inicio</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#objetivos">Objetivos</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#interesses">Interesses</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#gostos">Gostos Pessoais</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#motivacoes">Motivações</a>
            </li>
            <li onClick={fecharMenu}>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
