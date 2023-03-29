// components
import Wrapper from "../components/UI/BackGround/Wrapper";
import BackGroundImg from "../components/UI/BackGround/BackGroundImg";
import HeaderTitle from "../components/Header/HeaderTitle";
import AccountContainer from "../components/User/Account/AccountContainer";

const Home = () => {
  return (
    <Wrapper>
      <BackGroundImg />
      <HeaderTitle className="header_title" />
      <AccountContainer />
    </Wrapper>
  );
};

export default Home;
