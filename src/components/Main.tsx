import { useState } from "react";
import styles from "../styles/components/Main.module.css";
import NotDataFood from "./NotDataFood";

const Main = () => {
  const [userFood, setUserFood] = useState<string>("");
  const [foodItem, setFoodItem] = useState<string[]>([]);

  const onSubmitFood = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFoodItem((prev) => [...prev, userFood]);
    setUserFood("");
  };

  const setFoodValue = (e: React.ChangeEvent<HTMLInputElement>) => setUserFood(e.target.value);

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
          <form onSubmit={onSubmitFood}>
            <input onChange={setFoodValue} value={userFood} placeholder="음식 이름을 여기에 입력 해주세요!" />
          </form>
        </div>
        <div className={styles.Main_food_wrap}>
          <div className={styles.Main_food__manual}>오늘, 뭘 먹을래? 이용방법!</div>
          {foodItem.map((a) => {
            return <div>{a}</div>;
          })}
        </div>
        <div className={styles.Main_food_randomResult}>
          <button>결과 확인하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
