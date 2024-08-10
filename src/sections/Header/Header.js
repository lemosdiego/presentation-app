import StylesHeader from "./StylesHeader.module.css";

const Header = () => {
  return (
    <>
      <div className={StylesHeader.container_menu}>
        <div className={StylesHeader.icon}>
          <img />
        </div>
        <p>Menu</p>
      </div>
      <header className={StylesHeader.header}>
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
