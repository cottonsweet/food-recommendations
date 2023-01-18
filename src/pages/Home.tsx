import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Home.module.css";
import backGroundImg from "../assets/backGround.jpg";

const Home = () => {
  const path = useNavigate();

  const loginBtn = () => path("/login");
  const joinBtn = () => path("/join");

  return (
    <div className={styles.home_wrap}>
      <div className={styles.home_img_box}>
        <img className={styles.home_img} src={backGroundImg} />
      </div>
      <div className={styles.home_title}>
        <div>오늘,</div>
        <span>뭘</span>
        <span>먹을까?</span>
      </div>
      <div className={styles.home_login_join}>
        <div onClick={joinBtn}>회원가입</div>
        <div onClick={loginBtn}>로그인</div>
      </div>
    </div>
  );
};

export default Home;
