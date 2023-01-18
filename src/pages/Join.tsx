import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth";
import styles from "../styles/pages/Join.module.css";
import backGroundImg from "../assets/backGround.jpg";

const Join = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const path = useNavigate();
  const handleCancleBtn = () => path("/");

  const setUserInfo = (e: React.FormEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLFormElement).name;
    const value = (e.target as HTMLFormElement).value;

    if (name === "username") {
      setUserName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "password2") {
      setPassword2(value);
    }
  };

  const handleSubmitAccountJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(auth);
    password !== password2 && setErrorMsg("비밀번호가 서로 동일하지 않습니다.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      path("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.join_wrap}>
      <div className={styles.join_main}>
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
            <form onSubmit={handleSubmitAccountJoin} className={styles.join_form}>
              <input name="username" onChange={setUserInfo} className={styles.join_name} placeholder="닉네임" />
              <input name="email" onChange={setUserInfo} className={styles.join_email} placeholder="이메일 주소" />
              <input name="password" onChange={setUserInfo} className={styles.join_password} placeholder="비밀번호" />
              <input name="password2" onChange={setUserInfo} className={styles.join_password2} placeholder="비밀번호 확인" />
              <button className={styles.join_btn}>회원가입</button>
            </form>
            <div className={styles.errorMsg}>{errorMsg ? errorMsg : null}</div>
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
