import Button from "../UI/Button";

const ComposeCard = () => {
  return (
    <div className="compose-card">
      <div className="compose-card-container">
        <p className="compose-text">Create post</p>
        <div className="input-wrapper">
          <div className="emoji-avatar">
            <span className="emoji">💬</span>
          </div>

          <input
            type="text"
            placeholder="Wanna see what others say about me? Check out the feed"
          />
        </div>
        <div className="btn-wrapper">
          <Button label="Post" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ComposeCard;
