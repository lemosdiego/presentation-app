import Styles from "./index.module.css";
import About from "@/sections/About/About";
import Header from "@/sections/Header/Header";
import Home from "@/sections/Home/Home";

const Index = () => {
  return (
    <div className={Styles.index}>
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default Index;
