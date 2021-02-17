import React from "react";
import chat from "../../../images/Chat.png";

const ChatSec = () => {
  return (
    <div className="chat-section">
      <div className="chat-inner-section">
        <div className="chat-img-div">
          <img src={chat} alt="" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5>Feel Free to Chat with Us</h5>
            <p>
              That being said, let's take a look at our expert pick of the best
              live chat software that you can use to grow your business.
            </p>
            <div className="chat-now-link">Chat Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSec;
