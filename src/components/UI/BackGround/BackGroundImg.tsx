// Logo
import background from "../../../assets/backGround.jpg";

// CSS
import styles from "./BackGroundImg.module.css";

const BackGroundImg = () => {
  return (
    <>
      <img className={styles.background_img} src={background} />
    </>
  );
};

export default BackGroundImg;
