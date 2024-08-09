import Image from "next/image";
import Styles from "./profile.module.css";

export const Profile = () => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.profileImage}>
        <Image
          src="/img/minhafoto.png"
          alt="Foto de Washington Diego Costa de Lemos"
          width={150}
          height={150}
          className={Styles.img}
        />
      </div>
      <p>Washington Diego costa de Lemos</p>
      <p>30 anos</p>
      <h4>Redes sociais:</h4>
      <ul className={Styles.social_media}>
        <li>
          <a href="https://WA.me/5581982383803" target="_blank">
            Whatsapp
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/washington-lemos-033177186/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/lemosdiego" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/washington.lemos_/?hl=pt-br"
            target="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
