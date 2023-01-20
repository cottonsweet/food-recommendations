import styles from "../styles/components/Main.module.css";

const Main = () => {
  return (
    <div className={styles.Main_wrap}>
      <div className={styles.Main}>
        <div className={styles.Main_header}>
          <div className={styles.Main_menu_header}>
            <div className={styles.Main_header__title}>
              <div>오늘,</div>
              <span>뭘 </span>
              <span>먹을까?</span>
            </div>
            <div className={styles.Main_header__info}>
              <div className={styles.Main_header__setting_btn}>설정</div>
            </div>
          </div>
          <div className={styles.Main_header__userName}>테스트님 반갑습니다.</div>
        </div>
        <div className={styles.Main_user_food}>
          <div>오늘은 어떤 음식을 드시고 싶으세요?</div>
          <form>
            <input placeholder="음식 이름을 여기에 입력 해주세요!" />
          </form>
        </div>
        <div className={styles.Main_food_wrap}>
          <div className={styles.Main_food__manual}>오늘, 뭘 먹을래? 이용방법!</div>
          <div>입력한 음식이 없음</div>
          <div>선택된 음식종류 ??가지</div>
        </div>
        <div className={styles.Main_food_randomResult}>
          <button>결과 확인하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
