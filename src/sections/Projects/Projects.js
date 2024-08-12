"use client";

import StylesProjects from "./StylesProjects.module.css";
import { useState, useEffect } from "react";
import slides from "@/data/sectionData";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ProximoSlide = () => {
    setCurrentSlide((SlideAnterior) => (SlideAnterior + 1) % slides.length);
  };

  const SlideAnterior = () => {
    setCurrentSlide(
      (SlideAnterior) => (SlideAnterior - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(ProximoSlide, 5000); // Muda o slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <section className={StylesProjects.projects}>
      <h2>Últimos Projetos</h2>
      <div
        className={StylesProjects.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={StylesProjects.slide}
            style={{
              borderColor: slide.borderColor,
            }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className={StylesProjects.slideImage}
            />
            <div className={StylesProjects.overlay}>
              <h2 className={StylesProjects.title}>{slide.title}</h2>
              <p className={StylesProjects.subtitle}>{slide.subtitle}</p>
              <div className={StylesProjects.links}>
                <a
                  href={slide.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={StylesProjects.link}
                >
                  Repository
                </a>
                <a
                  href={slide.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={StylesProjects.link}
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={SlideAnterior} className={StylesProjects.prevBtn}>
        <img src="/img/anterior.svg" alt="Previous Slide" />
      </button>
      <button onClick={ProximoSlide} className={StylesProjects.nextBtn}>
        <img src="/img/proximo.svg" alt="Next Slide" />
      </button>
    </section>
  );
};

export default Projects;
