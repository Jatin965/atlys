import { ChangeEvent } from "react";
import InputField from "./UI/InputField";

const SigninCard = () => {
  return (
    <div className="bg-wrapper">
      <div className="signin-card">
        <p className="welcome-text">WELCOME BACK</p>

        <InputField value={""} onChange={() => {}} />
        <InputField value={""} onChange={() => {}} />
      </div>
    </div>
  );
};

export default SigninCard;
