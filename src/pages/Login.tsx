import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth";
import backGroundImg from "../assets/backGround.jpg";
import styles from "../styles/pages/Login.module.css";

const Login = () => {
  const path = useNavigate();
  const handleCancleBtn = () => path("/");
  return (
    <div className={styles.login_wrap}>
      <div className={styles.login_main}>
        <div className={styles.login_img_box}>
          <img className={styles.login_img} src={backGroundImg} />
        </div>
        <div className={styles.login_title}>
          <div>오늘,</div>
          <span>뭘</span>
          <span>먹을까?</span>
        </div>
        <div className={styles.login_section}>
          <div className={styles.login_section_wrap}>
            <div onClick={handleCancleBtn} className={styles.login_cancle__btn}>
              돌아가기
            </div>
            <div className={styles.login_section__login}>로그인</div>
          </div>
          <div className={styles.login_user_wrap}>
            <form className={styles.login_form}>
              <input className={styles.login_email} placeholder="이메일 주소" />
              <input className={styles.login_password} placeholder="비밀번호" />
              <button className={styles.login_btn}>로그인</button>
            </form>
          </div>
          <div className={styles.login_create_wrap}>
            <span className={styles.login_create_btn}>가입하신 계정이 없으신가요 ?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
