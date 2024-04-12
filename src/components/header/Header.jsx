import "./Header.css";

import chatbot from "../../assets/chatbot.png";
import vector_1 from "../../assets/vector_1.png";

function Header() {
  return (
    <nav id="navbar">
      <div className="navbar-container center">
        <div className="left">
          <div className="img-container">
            <img src={chatbot} alt="chatbot" />
          </div>
          <div className="profile-info">
            <div className="profile-name">
              Timpu&nbsp; <img src={vector_1} alt="profile verified symbol" />
            </div>
            <div className="profile-desc">Chat assistant</div>
          </div>
        </div>
        <div className="right">
          <span className="online-status"></span>&nbsp;Online
        </div>
      </div>
    </nav>
  );
}

export default Header;
