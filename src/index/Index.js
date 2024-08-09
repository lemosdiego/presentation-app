"use client"; // Habilita o modo client-side

import Section from "@/components/Section/Section";
import Menu from "../components/Menu/Menu";
import Profile from "../components/Profile/Profile";
import Styles from "./index.module.css";
import { useState } from "react";

export const Index = () => {
  // Estado para armazenar a seção atual
  const [currentSection, setCurrentSection] = useState("section1");

  return (
    <div className={Styles.container}>
      {/* Seção que contém o perfil e a seção ativa */}
      <div className={Styles.channel}>
        <Profile />
        <Section currentSection={currentSection} />{" "}
        {/* Atualizado para usar o novo nome do componente */}
      </div>
      {/* Menu para alternar entre seções */}
      <Menu setCurrentSection={setCurrentSection} />{" "}
      {/* Atualizado para usar o novo nome do estado */}
    </div>
  );
};

export default Index;
