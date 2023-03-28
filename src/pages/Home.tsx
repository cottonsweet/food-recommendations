// components
import Wrapper from "../components/UI/BackGround/Wrapper";
import BackGroundImg from "../components/UI/BackGround/BackGroundImg";
import HeaderTitle from "../components/Header/HeaderTitle";
import AccountContainer from "../components/User/Account/AccountContainer";

const Home = () => {
  return (
    <Wrapper>
      <BackGroundImg />
      <HeaderTitle />
      <AccountContainer />
    </Wrapper>
  );
};

export default Home;
