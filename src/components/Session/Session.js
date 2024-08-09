"use client";
import sessionStyles from "./sessionStyles.module.css";
import informationStyles from "./informationStyles.module.css";
import sobreStyles from "./sobreStyles.module.css";
import tastesStyles from "./tastesStyles.module.css";
import motivationStyles from "./motivationStyles.module.css";
import projectsStyles from "./projectsStyles.module.css";
import Card from "../Card/Card";

const Session = ({ currentSession }) => {
  return (
    <div className={sessionStyles.session}>
      {currentSession === "session1" && (
        <div className={informationStyles.additional_information}>
          <h2>Formação acadêmica:</h2>
          <p>Análise e Desenvolvimento de Sistemas - Concluído</p>
          <p>Engenharia de Software - Cursando</p>
          <h3>Certificados:</h3>
          <button>Certificados</button>
          <h3>Currículo:</h3>
          <button>Currículo</button>
          <p>
            Confira meu <a href="">Portfólio</a>
          </p>
        </div>
      )}
      {currentSession === "session2" && (
        <div className={sobreStyles.sobre}>
          <h2>Sobre mim</h2>
          <p>
            Olá, sou Washington Lemos. Sou apaixonado por tecnologia e
            desenvolvimento de software, com uma forte dedicação em evoluir e
            crescer na área de programação. Atualmente, estou cursando
            Engenharia de Software e trabalhando como desenvolvedor front-end,
            com experiência em projetos pessoais e conhecimento em tecnologias
            como HTML, CSS, JavaScript, React e Next.js. Meu objetivo de
            carreira é consolidar minha posição na área de tecnologia e
            contribuir para projetos inovadores que façam a diferença. Estou
            sempre em busca de novos desafios e oportunidades para aprender e me
            aprimorar.
          </p>
          <h2>Objetivos de Carreira:</h2>
          <p>
            Minha meta é me destacar na área de desenvolvimento front-end,
            contribuindo para projetos de impacto e alcançando reconhecimento
            profissional. Busco oportunidades que me permitam aplicar meus
            conhecimentos, aprender novas tecnologias e colaborar com equipes
            criativas e inovadoras.
          </p>
          <h2>Áreas de Interesse na Programação:</h2>
          <p>
            Tenho interesse em desenvolvimento front-end e estou expandindo meus
            conhecimentos em engenharia de software, desenvolvimento full stack
            e banco de dados. Acredito que entender tanto o front-end quanto o
            back-end é crucial para criar aplicações completas e funcionais.
            Estou sempre em busca de novos desafios para aplicar e aprimorar
            essas habilidades.
          </p>
        </div>
      )}
      {currentSession === "session3" && (
        <div className={tastesStyles.personal_tastes}>
          <h2>Gostos Pessoais</h2>
          <p>
            Sou uma pessoa apaixonada por viajar e explorar novos lugares. Entre
            os diversos destinos que já tive a oportunidade de conhecer pelo
            Brasil, a Chapada dos Veadeiros se destacou como o mais marcante.
            Lá, tive a chance de me conectar profundamente com a natureza
            através de suas cachoeiras deslumbrantes e trilhas revitalizantes. A
            natureza exerce um efeito renovador em mim, e sempre busco estar em
            contato com ela. Além das viagens, tenho um grande apreço por
            esportes como futebol e ciclismo, que me ajudam a manter um estilo
            de vida ativo e saudável. No universo dos games, sou fã do estilo
            battlegrounds, que sempre me proporciona momentos de diversão e
            desafio. Valorizo muito o tempo com minha família e adoro aproveitar
            os fins de semana para estar com eles, seja em atividades ao ar
            livre ou em momentos de lazer. Sou um grande apreciador de filmes e
            séries, e meus gêneros preferidos são os de guerra e de heróis. As
            histórias intensas e inspiradoras desses gêneros sempre me envolvem
            e me fascinam.
          </p>
        </div>
      )}
      {currentSession === "session4" && (
        <div className={motivationStyles.motivations}>
          <h2>Motivações</h2>
          <p>
            Minha principal motivação para participar da comunidade Código Certo
            Coders é a oportunidade de crescer profissionalmente e me conectar
            com outros desenvolvedores apaixonados por tecnologia. Acredito que
            a comunidade oferece um ambiente enriquecedor para compartilhar
            conhecimentos, aprender novas habilidades e colaborar em projetos
            desafiadores. Quero me envolver ativamente, contribuir com minhas
            habilidades e, ao mesmo tempo, absorver experiências e insights de
            outros membros. Estou determinado a utilizar essa plataforma para
            acelerar minha evolução na área de desenvolvimento front-end,
            alcançar meus objetivos de carreira e mostrar meu potencial em um
            espaço que valoriza a inovação e o aprendizado contínuo.
          </p>
        </div>
      )}
      {currentSession === "session5" && (
        <div className={projectsStyles.projects}>
          <h2>Confira meus últimos projetos</h2>
          <div className={projectsStyles.container_cards}>
            <Card />
          </div>
          <p>
            Você pode conferir meus projetos <span>Aqui...</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Session;
