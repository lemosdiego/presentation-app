import HomeStyles from "./HomeStyles.module.css";

const Home = () => {
  return (
    <section className={HomeStyles.home}>
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
      <button>Currículo</button>
      <button>Certificados</button>
      <p>Confira meu portfólio</p>
    </section>
  );
};

export default Home;
