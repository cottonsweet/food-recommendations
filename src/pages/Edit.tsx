import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiCog } from "react-icons/hi";
import styles from "../styles/pages/Edit.module.css";
import { auth } from "../Auth";
import { signOut, updateProfile } from "firebase/auth";

const Edit = () => {
  const [newUserName, setNewUserName] = useState<string>("");
  const userName = auth.currentUser?.displayName;
  const path = useNavigate();
  const handleMainBtn = () => path("/");

  const changeUserName = (e: React.FormEvent<HTMLInputElement>) => setNewUserName((e.target as HTMLFormElement).value);

  const updateProfileNickName = async () => {
    if (newUserName === userName) return alert("기존 닉네임과 동일하게 변경은 불가합니다 !");
    if (newUserName === "") return alert("공백은 불가합니다 !");
    if (auth.currentUser !== null) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: newUserName,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogOutBtn = async () => {
    if (window.confirm("로그아웃 하시겠습니까 ?")) {
      try {
        alert("로그아웃 되었습니다.");
        await signOut(auth);
        path("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className={styles.Edit_wrap}>
      <div className={styles.Edit}>
        <div className={styles.Edit_header}>
          <div className={styles.Edit_menu_header}>
            <div className={styles.Edit_header__title}>
              <div>오늘,</div>
              <span>뭘 </span>
              <span>먹을까?</span>
            </div>
            <div className={styles.Edit_header__info}>
              <span className={styles.Edit_header__setting_btn}>
                <HiCog />
              </span>
            </div>
          </div>
          <div className={styles.Edit_header__userName}>{userName}님, 반갑습니다.</div>
        </div>
        <div className={styles.Edit__section}>
          <div className={styles.Edit_pathHome__Btn}>
            <span onClick={handleMainBtn}>돌아가기</span>
          </div>
          <div className={styles.Edit_tool}>
            <div className={styles.Edit_tool__title}>설정</div>

            <div className={styles.Edit_profile}>
              <span onClick={updateProfileNickName}>닉네임 변경</span>
              <input onChange={changeUserName} placeholder={userName === null ? "익명" : userName} />
            </div>

            <div onClick={handleLogOutBtn} className={styles.Edit_logOut}>
              <span className={styles.Edit__logOut__btn}>로그아웃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
