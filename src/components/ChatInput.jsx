import { useState } from "react"
import { useChat } from "../context/ChatContext";

const ChatInput = () => {
    const[text, setText] = useState("");
    const{sendMessage, isTyping} = useChat();

    const handleSend = () => {
        if(text.trim() === "" || isTyping) return;
        sendMessage(text);
        setText("");
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && !e.shiftKey){
            e.preventDefault();
            handleSend();
        }
    }

    return(
        <div className="chat-input-area">
            <div className="chat-input-box">
                    <button className="icon-btn" type="button" aria-label="Attach file">
                        <i className="fa-solid fa-paperclip"></i>
                    </button>

                    <textarea
                        rows='1'
                        placeholder="Ask Maverick AI anything..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button
                        className="send-btn"
                        onClick={handleSend}
                        disabled={text.trim() === "" || isTyping}
                        aria-label="Send Message"
                    >
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
            </div>
            <small>Maverick AI is a frontend demo. Replies are predefined.</small>
        </div>
    )
}

export default ChatInput