"use client"; // Habilita o modo client-side

import Menu from "../components/Menu/Menu";
import Profile from "../components/Profile/Profile";
import Session from "../components/Session/Session";
import Styles from "./index.module.css";
import { useState } from "react";

export const Index = () => {
  // Estado para armazenar a sessão atual
  const [currentSession, setCurrentSession] = useState("session1");

  return (
    <div className={Styles.container}>
      {/* Seção que contém o perfil e a sessão ativa */}
      <div className={Styles.channel}>
        <Profile />
        <Session currentSession={currentSession} />
      </div>
      {/* Menu para alternar entre sessões */}
      <Menu setCurrentSession={setCurrentSession} />
    </div>
  );
};

export default Index;
