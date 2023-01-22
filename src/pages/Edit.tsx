import { HiCog } from "react-icons/hi";
import styles from "../styles/pages/Edit.module.css";
import { auth } from "../Auth";

const Edit = () => {
  const userName = auth.currentUser?.displayName;
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
          <div className={styles.Edit_header__userName}>{userName === null ? "익명" : userName}님, 반갑습니다.</div>
        </div>
        <div className={styles.Edit__section}>
          <div className={styles.Edit_pathHome__Btn}>
            <span>돌아가기</span>
          </div>
          <div className={styles.Edit_tool}>
            <div className={styles.Edit_tool__title}>설정</div>

            <div className={styles.Edit_profile}>
              <span>닉네임 변경</span>
              <input placeholder={userName === null ? "익명" : userName} />
            </div>

            <div className={styles.Edit_logOut}>
              <span className={styles.Edit__logOut__btn}>로그아웃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
