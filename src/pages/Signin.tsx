import SigninCard from "../components/SigninCard";

const Signin = () => {
  return (
    <div className="signin">
      <div className="signin-container">
        <div className="card-wrapper">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>

          <SigninCard />
        </div>
      </div>
    </div>
  );
};

export default Signin;
