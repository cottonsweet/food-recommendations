// Components
import React from "react";
import UserInput from "./UserInput";

interface Props {
  onChangeInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitLoginBtn?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserLoginForm = (props: Props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitLoginBtn}>
        <UserInput
          type="email"
          name="email"
          onChange={props.onChangeInputValue}
          className="join_email"
          placeholder="이메일 주소"
        />
        <UserInput
          type="password"
          name="password"
          onChange={props.onChangeInputValue}
          className="join_password"
          placeholder="비밀번호"
        />
      </form>
    </div>
  );
};

export default UserLoginForm;
