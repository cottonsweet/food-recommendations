// Components
import React from "react";
import UserInput from "./UserInput";

interface Props {
  setUserInfo?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitAccountJoin?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserForm = (props: Props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitAccountJoin}>
        <UserInput
          type="text"
          name="username"
          onChange={props.setUserInfo}
          className={"join_name"}
          placeholder="닉네임"
        />
        <UserInput
          type="email"
          name="email"
          onChange={props.setUserInfo}
          className={"join_email"}
          placeholder="이메일 주소"
        />
        <UserInput
          type="password"
          name="password"
          onChange={props.setUserInfo}
          className={"join_password"}
          placeholder="비밀번호"
        />
        <UserInput
          type="password"
          name="password2"
          onChange={props.setUserInfo}
          className={"join_password2"}
          placeholder="비밀번호 확인"
        />
      </form>
    </div>
  );
};

export default UserForm;
