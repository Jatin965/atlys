import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { AuthCardProps } from "../assets/helpers/types";

const RegisterCard: React.FC<AuthCardProps> = ({
  isPopup,
  closePopup,
  setRegisterView,
}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const registerHandler = () => {
    if (isPopup) {
      closePopup!(false);
    } else navigate("/feed");
  };
  return (
    <div className="bg-wrapper">
      <div className="register-card">
        <p className="welcome-text">SIGN UP</p>
        <p className="login-text">Create an account to continue</p>

        <InputField
          value={email}
          onChange={emailChangeHandler}
          label="Email"
          placeholder="Enter your email"
        />
        <InputField
          value={username}
          onChange={usernameChangeHandler}
          label="Username"
          placeholder="Choose a preferred username"
        />
        <InputField
          value={password}
          onChange={passwordChangeHandler}
          label="Password"
          placeholder="Choose a strong password"
          type="password"
        />

        <Button label="Continue" onClick={registerHandler} className="login-btn" />

        <p className="register-text">
          Already have an account?{" "}
          <span onClick={() => setRegisterView(false)}>
            Login <Icon icon="lucide:arrow-right" height={18} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
