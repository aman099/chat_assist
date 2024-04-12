import "./Message.css";

import right_chevron_2 from "../../assets/right-chevron_2.svg";
import krunk_logo from "../../assets/krunk_logo.svg";
import attach from "../../assets/attach.svg";

function Message() {
  return (
    <section id="message">
      <div className="message-container center">
        <div className="input-container">
          <input id="msg-input" type="text" placeholder="Type your message" />
          <span className="attach">
            <img src={attach} alt="" />
          </span>
        </div>
        <div className="button-container">
          <button className="btn">
            <img src={right_chevron_2} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className="f00ter">
        <footer id="footer">
          <div className="footer-container center">
            <p>
              powered by <strong className="krunk">Krunk.ai</strong>
              <span className="krunk-logo">
                <img src={krunk_logo} alt="Krunk logo" />
              </span>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Message;
