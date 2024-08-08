import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react";

import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { AuthCardProps } from "../assets/helpers/types";


const SigninCard: React.FC<AuthCardProps> = ({
  isPopup,
  closePopup,
  setRegisterView,
}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    if (isPopup) {
      closePopup!(false);
    } else navigate("/feed");
  };
  return (
    <div className="bg-wrapper">
      <div className="signin-card">
        <p className="welcome-text">WELCOME BACK</p>
        <p className="login-text">Log into your account</p>

        <InputField
          value={email}
          onChange={emailChangeHandler}
          label="Email or Username"
          placeholder="Enter your email or username"
        />
        <InputField
          value={password}
          onChange={passwordChangeHandler}
          label="Password"
          placeholder="Enter your password"
          type="password"
          forgotPasswordLink="/"
        />

        <Button label="Login now" onClick={loginHandler} className="login-btn" />

        <p className="register-text">
          Not registered yet?{" "}
          <span onClick={() => setRegisterView(true)}>
            Register <Icon icon="lucide:arrow-right" height={18} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninCard;
