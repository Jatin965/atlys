import React from "react";
import { postsData } from "../assets/helpers/StaticData";
import UserFeedCard from "../components/Feed/UserFeedCard";

const Feed = () => {
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

          <div className="compose-card"></div>

          <div className="user-feed-list">
            {postsData?.map((post) => (
              <UserFeedCard key={post.userName} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
