import "./Chats.css";

function Chats() {
  return (
    <main id="chats">
      <div className="chats-container center">
        <div className="left-chat">
          <div className="left-chat-container">
            <p>
              Hi Sam! I am your personal <br /> shopping assistant , how can i
              <br /> help you today ?
            </p>
          </div>
        </div>
        <div className="right-chat">
          <div className="right-chat-container">
            <p>
              I am looking for a hand bag,
              <br /> with long strap .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chats;
