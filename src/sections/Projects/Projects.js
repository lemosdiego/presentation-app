"use client";

import { useState, useEffect } from "react";
import StylesProjects from "./StylesProjects.module.css";
import slides from "@/data/sectionData";
import iconsData from "@/data/iconsData";
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className={StylesProjects.projects}>
      <h2>Últimos Projetos</h2>
      <div className={StylesProjects.slideshow_container}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={StylesProjects.mySlides}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <img src={slide.imageUrl} alt={slide.title} />
            <div className={StylesProjects.text}>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
              <div>
                <a
                  href={slide.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>GitHub Repo</button>
                </a>
                <a
                  href={slide.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}

        <a className={StylesProjects.prev} onClick={prevSlide}>
          &#10094;
        </a>
        <a className={StylesProjects.next} onClick={nextSlide}>
          &#10095;
        </a>
      </div>
      <div className={StylesProjects.skills}>
        <div className={StylesProjects.icons}>
          {iconsData.map((icon) => (
            <div key={icon.id} className={StylesProjects.icon}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
          {iconsData.map((icon) => (
            <div key={`repeat-${icon.id}`} className={StylesProjects.icon}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
