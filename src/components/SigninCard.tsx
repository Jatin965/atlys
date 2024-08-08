import { useState } from "react";
import InputField from "./UI/InputField";

const SigninCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="bg-wrapper">
      <div className="signin-card">
        <p className="welcome-text">WELCOME BACK</p>

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
        />
      </div>
    </div>
  );
};

export default SigninCard;
