import Footer from "@/sections/Footer/Footer";
import Styles from "./index.module.css";
import About from "@/sections/About/About";
import Header from "@/sections/Header/Header";
import Home from "@/sections/Home/Home";
import Projects from "@/sections/Projects/Projects";

const Index = () => {
  return (
    <div className={Styles.index}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
