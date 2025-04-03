import React, { useRef, useState, useEffect } from "react";

const ChatWidget = ({ showBackToTop }) => {
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const chatContainerRef = useRef(null);
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { text: chatInput, isUser: true }]);
    const userMessage = chatInput;
    setChatInput("");

    setTimeout(() => {
      let response =
        "Thank you for your message. A customer service representative will be with you shortly. For quick response, kindly send us chat on Whatsapp :+234 9047180219";

      if (userMessage.toLowerCase().includes("emergency")) {
        response =
          "We understand this is urgent. Please call our emergency line at +234 9047180219  for immediate assistance, or fill out our emergency contact form.";
      }

      setChatMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  const toggleChatWidget = () => {
    setShowChatWidget(!showChatWidget);
    if (!showChatWidget && chatMessages.length === 0) {
      setChatMessages([
        {
          text: "Hello! Welcome to CYPEX Pest Control. How can we help you today?",
          isUser: false,
        },
      ]);
    }
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div
      className={`chat-container ${
        showBackToTop ? "chat-with-back-to-top" : ""
      }`}
    >
      {showChatWidget ? (
        <div className="chat-widget">
          <div className="chat-header">
            <h3 className="chat-title">Live Chat</h3>
            <button onClick={toggleChatWidget} className="chat-close-button">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div ref={chatContainerRef} className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.isUser ? "user-message" : "agent-message"
                }`}
              >
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="chat-form">
            <div className="chat-input-container">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="chat-input"
                placeholder="Type your message..."
              />
              <button type="submit" className="chat-send-button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChatWidget}
          className="chat-toggle-button"
          aria-label="Live Chat"
        >
          <i className="fas fa-comments chat-icon"></i>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
