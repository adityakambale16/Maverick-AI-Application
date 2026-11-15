import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useChat } from "../context/ChatContext";
import { suggestedPrompts } from "../data/responses";

const ChatWindow = () => {
    const {activeChat, activeChatId, isTyping, sendMessage} = useChat();
    const endOfMessage = useRef(null);

    const messages = activeChat ? activeChat.messages : [];
    
    // scroll to the newest message whenever messages or typing status change
    useEffect(() => {
        endOfMessage.current.scrollIntoView({behavior : 'smooth'});
    }, [activeChatId, messages.length, isTyping]);

    return(
        <div className="chat-window">
            {messages.length === 0 ? (
                <div className="welcome">
                    <span className="welcome-logo"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                    <h1>Hello! How can I help you today?</h1>
                    <p>Pick a suggestion below or type your own questions.</p>
                    <div className="prompt-list">
                        {suggestedPrompts.map(prompt => (
                            <button key={prompt} className="prompt-chip" onClick={() => sendMessage(prompt)}>
                                {prompt}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="messages">
                    {messages.map(message => (
                        <ChatMessage key={message.id} role={message.role} text={message.text}/>
                    ))}

                    {isTyping && activeChat && (
                        <div className="message-row">
                            <span className="message-avatar"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                            <div className="message-bubble typing">AI is thinking...</div>
                        </div>
                    )}
                </div>
            )}
            <div ref={endOfMessage}></div>
        </div>
    )
}

export default ChatWindow