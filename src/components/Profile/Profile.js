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
        <li>Whatsapp</li>
        <li>Linkedin</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
};

export default Profile;
