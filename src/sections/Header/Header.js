"use client";
import { useEffect, useRef, useState } from "react";
import StylesHeader from "./StylesHeader.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const abrirRef = useRef(null);
  const fecharRef = useRef(null);

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
    if (headerRef.current && abrirRef.current && fecharRef.current) {
      headerRef.current.style.display = "flex";
      abrirRef.current.style.display = "none";
      fecharRef.current.style.display = "block";
      setIsMenuOpen(true);
    }
  };

  const fecharMenu = () => {
    if (headerRef.current && abrirRef.current && fecharRef.current) {
      headerRef.current.style.display = "none";
      abrirRef.current.style.display = "block";
      fecharRef.current.style.display = "none";
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className={StylesHeader.container_menu}>
        <div className={StylesHeader.menu}>
          <div className={StylesHeader.icon}>
            <img src="/img/codigocerto.png" alt="Icone codigo certo" />
          </div>
          <p className={StylesHeader.abrir} ref={abrirRef} onClick={abrirMenu}>
            Menu
          </p>
          <p
            className={StylesHeader.fechar}
            ref={fecharRef}
            onClick={fecharMenu}
          >
            Fechar
          </p>
        </div>
        <div className={StylesHeader.media}>
          <div className={StylesHeader.icons}>
            <a href="https://WA.me/5581982383803" target="_blank">
              <img src="icons/whats.svg" alt="Icone Whatsapp" />
            </a>
          </div>
          <div className={StylesHeader.icons}>
            <a
              href="https://www.linkedin.com/in/washington-lemos-033177186/"
              target="_blank"
            >
              <img src="icons/linkedin.svg" alt="Icone LinkedIn" />
            </a>
          </div>
          <div className={StylesHeader.icons}>
            <a href="https://github.com/lemosdiego" target="_blank">
              <img src="icons/github.svg" alt="Icone GitHub" />
            </a>
          </div>
          <div className={StylesHeader.icons}>
            <a
              href="https://www.instagram.com/washington.lemos_/?hl=pt-br"
              target="_blank"
            >
              <img src="icons/insta.svg" alt="Icone Instagram" />
            </a>
          </div>
        </div>
      </div>
      <header
        className={StylesHeader.header}
        ref={headerRef}
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
