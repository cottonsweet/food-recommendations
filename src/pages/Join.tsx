import { useNavigate } from "react-router-dom";

import styles from "../styles/pages/Join.module.css";
import backGroundImg from "../assets/backGround.jpg";

const Join = () => {
  const path = useNavigate();
  const handleCancleBtn = () => path("/");
  return (
    <div className={styles.join_wrap}>
      <div className={styles.login_main}>
        <div className={styles.join_img_box}>
          <img className={styles.join_img} src={backGroundImg} />
        </div>
        <div className={styles.join_title}>
          <div>오늘,</div>
          <span>뭘</span>
          <span>먹을까?</span>
        </div>
        <div className={styles.join_section}>
          <div className={styles.join_section_wrap}>
            <div onClick={handleCancleBtn} className={styles.join_cancle__btn}>
              돌아가기
            </div>
            <div className={styles.join_section__login}>서비스 회원가입</div>
          </div>
          <div className={styles.join_user_wrap}>
            <form className={styles.join_form}>
              <input className={styles.join_name} placeholder="닉네임" />
              <input className={styles.join_email} placeholder="이메일 주소" />
              <input className={styles.join_password} placeholder="비밀번호" />
              <input className={styles.join_password2} placeholder="비밀번호 확인" />
              <button className={styles.join_btn}>회원가입</button>
            </form>
          </div>
          <div className={styles.join_defaultLogin_wrap}>
            <span className={styles.join_defaultLogin_btn}>이미 가입하신 계정이 있으신가요 ?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
