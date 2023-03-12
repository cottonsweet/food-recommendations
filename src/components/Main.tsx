import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../Auth";
import styles from "../styles/components/Main.module.css";
import { HiCog } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ResultModal from "./ResultModal";

const Main = () => {
  const [userFood, setUserFood] = useState("");
  const [foodItem, setFoodItem] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const userName = auth.currentUser?.displayName;
  const path = useNavigate();
  const handleEditBtn = () => path("/edit");

  /** 배열 초기화 함수 */
  const itemFoodListClearBtn = () => {
    setFoodItem([]);
    setSelected([]);
    setResult("");
    return;
  };

  /** Input 값 form 전송함수 */
  const onSubmitFood = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userFood === "") return alert("공백은 금지 입니다.");
    if (userFood.length > 10) {
      setUserFood("");
      return alert("10글자 미만으로 기입해주세요 !");
    }
    setFoodItem((prev) => [...prev, userFood]);
    setUserFood("");
  };

  const setItem = (value: string) => setSelected((selected) => [...selected, value]);

  const selectedFoodItem = (e: React.MouseEvent<HTMLElement>) => {
    const value = String((e.target as HTMLElement).textContent);
    const indexLocation = selected.indexOf(value);

    if (indexLocation === -1) {
      return setItem(value);
    } else {
      selected.splice(indexLocation, 1);
      setSelected([...selected]);
      return;
    }
  };

  /** 사용자 Input 값 저장하는 함수 */
  const setFoodValue = (e: React.ChangeEvent<HTMLInputElement>) => setUserFood(e.target.value);

  /** 랜덤배열 결과값 출력 함수 */
  const randomArrResult = () => {
    if (selected.length === 0) return alert("선택된 음식이 없어요 !");
    if (selected.length === 1) return alert("음식은 2개이상 선택해주셔야 합니다 !");
    const resultFoodData = selected[Math.floor(Math.random() * selected.length)];
    setModal(true);
    setResult(resultFoodData);
    setFoodItem([]);
    setSelected([]);
  };

  const isInAcitivyModal = () => setModal((prev) => !prev);

  return (
    <div className={styles.Main_wrap}>
      {modal && <ResultModal result={result} isInAcitivyModal={isInAcitivyModal} />}

      <div className={styles.Main}>
        <div className={styles.Main_header}>
          <div className={styles.Main_menu_header}>
            <div className={styles.Main_header__title}>
              <div>오늘,</div>
              <span>뭘 </span>
              <span>먹을까?</span>
            </div>
            <div className={styles.Main_header__info}>
              <span onClick={handleEditBtn} className={styles.Main_header__setting_btn}>
                <HiCog />
              </span>
            </div>
          </div>
          <div className={styles.Main_header__userName}>{userName}님, 반갑습니다.</div>
        </div>
        <div className={styles.Main_user_food}>
          <div>오늘은 어떤 음식을 드시고 싶으세요?</div>
          <form onSubmit={onSubmitFood}>
            <input onChange={setFoodValue} value={userFood} placeholder="음식 이름을 여기에 입력 해주세요!" />
          </form>
        </div>
        <div className={styles.Main_food_wrap}>
          <div className={styles.Main_food__manual}>
            <span>오늘, 뭘 먹을래? 이용방법!</span>
          </div>
          <div className={styles.foodItem_header}>
            <div className={styles.foodItem_itemLength}>
              선택된 음식 - {selected.length} / {foodItem.length}
            </div>
            <span onClick={itemFoodListClearBtn} className={styles.foodItem_itemClear__btn}>
              초기화
            </span>
          </div>
          <div className={styles.foodItem}>
            {foodItem?.map((a, i) => {
              return (
                <div onClick={selectedFoodItem} key={i} className={`${styles.foodItem__list}`}>
                  <span className={styles.foodItem__list__number}>{i + 1}</span>
                  <span className={`${styles.foodItem__list__item} ${selected.includes(a) ? styles.foodItem__list__selected : ""}`}>
                    {a}
                    <span>
                      <AiOutlineCheckCircle className={`${styles.foodItem__list__icon} ${selected.includes(a) ? styles.foodItem__list__selected__icon : ""}`} />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.Main_food_randomResult}>
          <button onClick={randomArrResult}>결과 확인하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
