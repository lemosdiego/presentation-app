import HomeStyles from "./HomeStyles.module.css";

const Home = () => {
  return (
    <section className={HomeStyles.home} id="inicio">
      <div className={HomeStyles.img}>
        <img src="/img/minhafoto.png" alt="Foto Washington Lemos" />
      </div>
      <h1>Olá, me chamo Washington Lemos</h1>
      <p>tenho 30 anos, sou um desenvolvedor front end</p>
      <h2>Formação</h2>
      <ul>
        <li>Análise e Desenvolvimento de Sistemas - Concluído</li>
        <li>Engenharia de Software - Cursando</li>
      </ul>
      <a
        className={HomeStyles.link}
        href="https://drive.google.com/file/d/1SNk7sdN6jDRRDpF_n_w4PBEpxEXvZ1IY/view?usp=drive_link"
        target="_blank"
      >
        Currículo
      </a>
      <a
        className={HomeStyles.link}
        href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=drive_link"
        target="_blank"
      >
        Certificados
      </a>
      <p>
        Confira meu{" "}
        <a href="https://new-portfolio-five-indol.vercel.app/" target="_blank">
          Portfólio
        </a>
      </p>
    </section>
  );
};

export default Home;
