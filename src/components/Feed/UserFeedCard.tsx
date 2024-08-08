import moment from "moment";
import React from "react";
import { Icon } from "@iconify/react";

interface CardProps {
  userImage: string;
  userName: string;
  postTime: number;
  isEdited?: boolean;
  menuOptions: string[];
  emoji: string;
  content: string;
  commentCount: number;
}

const UserFeedCard: React.FC<CardProps> = ({
  userImage,
  userName,
  postTime,
  isEdited = false,
  menuOptions,
  emoji,
  content,
  commentCount,
}) => {
  const relativeTime = moment(postTime).fromNow();

  return (
    <div className="user-feed-card">
      {/* Row 1: User image, name, time, edited text, and menu */}
      <div className="card-header">
        <div className="user">
          <img
            src={userImage}
            alt={`${userName}'s profile`}
            className="user-image"
          />
          <div className="user-info">
            <p className="user-name">{userName}</p>
            <p className="post-time">
              {relativeTime}{" "}
              {isEdited && <span className="edited-dot">· Edited</span>}
            </p>
          </div>
        </div>
        <div className="menu">
          <button className="menu-button">
            <Icon icon="lucide:more-horizontal" width={20} />
          </button>
        </div>
      </div>

      {/* Row 2: Emoji and content */}
      <div className="card-content">
        <div className="emoji-avatar">
          <span className="emoji">{emoji}</span>
        </div>
        <div className="text-content">{content}</div>
      </div>

      {/* Row 3: Number of comments */}
      <div className="card-footer">
        <p>
          <Icon icon="lucide:message-square" /> {commentCount} Comments
        </p>
      </div>
    </div>
  );
};

export default UserFeedCard;
