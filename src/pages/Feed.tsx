import { useState } from "react";
import { postsData } from "../assets/helpers/StaticData";
import UserFeedCard from "../components/Feed/UserFeedCard";
import ComposeCard from "../components/Feed/ComposeCard";
import RegisterCard from "../components/RegisterCard";
import SigninCard from "../components/SigninCard";

const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [registerView, setRegisterView] = useState<boolean>(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="feed">
      <div className="feed-container">
        <div className="content">
          <div className="welcome-msg">
            <h2 className="user-text">Hello Recruiter</h2>
            <p className="sub-text">
              How are you doing today? Would you like to share the details for next
              round of interviews with me?🫣
            </p>
          </div>

          <ComposeCard />

          <div className={`user-feed-list ${isModalOpen ? "modal-open" : ""}`}>
            {postsData?.map((post) => (
              <div onClick={openModal}>
                <UserFeedCard key={post.userName} {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {registerView ? (
              <RegisterCard
                setRegisterView={setRegisterView}
                isPopup={true}
                closePopup={closeModal}
              />
            ) : (
              <SigninCard
                setRegisterView={setRegisterView}
                isPopup={true}
                closePopup={closeModal}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
