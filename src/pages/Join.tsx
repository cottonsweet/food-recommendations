import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../Auth";

// CSS
import classes from "./Join.module.css";

// Components
import BackGroundImg from "../components/UI/BackGround/BackGroundImg";
import AccountSection from "../components/UI/BackGround/Account/AccountSection";
import HeaderTitle from "../components/Header/HeaderTitle";
import AccountModalHeader from "../components/Header/AccountHeader/AccountModalHeader";
import BackBtn from "../components/UI/Button/BackBtn";
import AccountBtn from "../components/UI/Button/AccountBtn";
import UserJoinForm from "../components/UI/Input/UserJoinForm";

const Join = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const path = useNavigate();

  const handleCancleBtn = () => path("/");

  const handleLoginBtn = () => path("/login");

  // Input값의 이벤트 발생시, 사용자가 입력한 값을 받아온다.
  const setUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

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

  // 회원가입 기능 함수
  const handleSubmitAccountJoin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    password !== password2 && setErrorMsg("비밀번호가 서로 동일하지 않습니다.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName: userName });
      path("/");
    } catch (error) {
      console.log(error);
    }
  };

  // 버튼 회원가입 기능 함수
  const handleBtnAccountJoin = async () => {
    password !== password2 && setErrorMsg("비밀번호가 서로 동일하지 않습니다.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName: userName });
      path("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackGroundImg />
      <HeaderTitle className="header_title" />
      <AccountSection>
        <AccountModalHeader className="account_modal_header">
          <BackBtn
            onClick={handleCancleBtn}
            className="back_btn"
            title="돌아가기"
          />
          <AccountModalHeader
            className="account_section__login_title"
            title="서비스 회원가입"
          />
        </AccountModalHeader>
        <UserJoinForm
          handleSubmitAccountJoin={handleSubmitAccountJoin}
          setUserInfo={setUserInfo}
        />
        <AccountBtn
          className="account__join_btn"
          onClick={handleBtnAccountJoin}
          title="회원가입"
        />
        <div className={classes.errorMsg}>{errorMsg ? errorMsg : null}</div>

        <div>
          <AccountBtn
            onClick={handleLoginBtn}
            className="join_defaultLogin_wrap"
            title="이미 가입하신 계정이 있으신가요 ?"
          />
        </div>
      </AccountSection>
    </>
  );
};

export default Join;
