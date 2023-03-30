import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { auth } from "../Auth";
import { signOut } from "firebase/auth";

// CSS
import classes from "./Logged.module.css";

// Components
import HeaderWrap from "../components/Header/HeaderWrapper/HeaderWrap";
import HeaderText from "../components/Header/HeaderWrapper/HeaderText";
import HeaderTitle from "../components/Header/HeaderTitle";
import LogoutIcon from "../components/UI/Icon/LogoutIcon";
import ResultModal from "../components/UI/Modal/ResultModal";
import AccountModalHeader from "../components/Header/AccountHeader/AccountModalHeader";
import FoodArticle from "../components/Food/Title/FoodArticle";
import FoodSelected from "../components/Food/Title/FoodSelected";
import FoodContainer from "../components/Food/FoodContainer";
import FoodSection from "../components/Food/FoodSection";
import Food from "../components/Food/Food";
import AccountBtn from "../components/UI/Button/AccountBtn";

const Logged = () => {
  const [userFood, setUserFood] = useState("");
  const [foodItem, setFoodItem] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const userName = auth.currentUser?.displayName;
  const path = useNavigate();

  // 로그아웃 기능
  const handleLogoutBtn = async () => {
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

  const setItem = (value: string) =>
    setSelected((selected) => [...selected, value]);

  const selectedFoodItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
  const setFoodValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserFood(e.target.value);

  /** 랜덤배열 결과값 출력 함수 */
  const randomArrResult = () => {
    if (selected.length === 0) return alert("선택된 음식이 없어요 !");
    if (selected.length === 1)
      return alert("음식은 2개이상 선택해주셔야 합니다 !");
    const resultFoodData =
      selected[Math.floor(Math.random() * selected.length)];
    setModal(true);
    setResult(resultFoodData);
    setFoodItem([]);
    setSelected([]);
  };

  // 모달 활성화
  const isInAcitivyModal = () => setModal((prev) => !prev);

  return (
    <>
      {modal && (
        <ResultModal result={result} isInAcitivyModal={isInAcitivyModal} />
      )}

      <div className={classes.Logged}>
        <HeaderWrap className="Header_wrap">
          <HeaderText className="Header_menu_Text">
            <HeaderTitle className="Logged_header__title" />
            <LogoutIcon onClick={handleLogoutBtn} />
          </HeaderText>
          <AccountModalHeader
            className="Logged_header__userName"
            title={`${userName}님, 반갑습니다.`}
          />
        </HeaderWrap>

        {/* -------------------------------------------------------------------------------------------------- */}

        <FoodSection
          className="food_section"
          onSubmit={onSubmitFood}
          onChange={setFoodValue}
          userFood={userFood}
        />

        {/* -------------------------------------------------------------------------------------------------- */}
        <FoodArticle>
          <FoodSelected selected={selected} foodItem={foodItem}>
            <AccountBtn onClick={itemFoodListClearBtn} title="초기화" />
          </FoodSelected>
          <FoodContainer>
            <Food
              foodItem={foodItem}
              selected={selected}
              selectedFoodItem={selectedFoodItem}
            />
          </FoodContainer>
        </FoodArticle>
        <AccountBtn
          onClick={randomArrResult}
          className="food_randomResult"
          title="결과 확인하기"
        />
      </div>
    </>
  );
};

export default Logged;
