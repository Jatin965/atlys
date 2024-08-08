import { useState } from "react";
import SigninCard from "../components/SigninCard";
import RegisterCard from "../components/RegisterCard";

const Signin = () => {
  const [registerView, setRegisterView] = useState<boolean>(false);
  return (
    <div className="signin">
      <div className="signin-container">
        <div className="card-wrapper">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          {registerView ? (
            <RegisterCard setRegisterView={setRegisterView} />
          ) : (
            <SigninCard setRegisterView={setRegisterView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
