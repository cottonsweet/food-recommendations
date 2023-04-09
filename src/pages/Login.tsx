import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth";

// Components
import BackGroundImg from "../components/UI/BackGround/BackGroundImg";
import HeaderTitle from "../components/Header/HeaderTitle";
import AccountModalHeader from "../components/Header/AccountHeader/AccountModalHeader";
import AccountSection from "../components/UI/BackGround/Account/AccountSection";
import AccountBtn from "../components/UI/Button/AccountBtn";
import BackBtn from "../components/UI/Button/BackBtn";
import UserLoginForm from "../components/UI/Input/UserLoinForm";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const path = useNavigate();

  const handleCancleBtn = () => path("/");
  const handleJoinBtn = () => path("/join");

  // 사용자 Input 값 확인
  const onChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLFormElement).name;
    const value = (e.target as HTMLFormElement).value;

    if (name === "email") return setEmail(value);
    if (name === "password") return setPassword(value);
  };

  // 로그인 submit 함수
  const handleSubmitLoginBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleCancleBtn();
    } catch (error) {
      console.log(error);
    }
  };

  // 로그인 버튼
  const handleLoginBtn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleCancleBtn();
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
          <BackBtn onClick={handleCancleBtn} className="back_btn" title="돌아가기" />
          <AccountModalHeader className="login_section__login" title="로그인" />
        </AccountModalHeader>
        <UserLoginForm onChangeInputValue={onChangeInputValue} handleSubmitLoginBtn={handleSubmitLoginBtn} />
        <div>
          <AccountBtn className="account__join_btn" onClick={handleLoginBtn} title="로그인" />
          <AccountBtn onClick={handleJoinBtn} className="join_defaultLogin_wrap" title="가입하신 계정이 없으신가요 ?" />
        </div>
      </AccountSection>
    </>
  );
};

export default Login;
