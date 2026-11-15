const ChatMessage = ({ role, text }) => {
    return(
        <div className={role === 'user' ? "message-row user" : "message-row"}>
            {role === 'ai' && (
                <span className="message-avatar"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
            )}
            <div className="message-bubble">{text}</div>
        </div>
    )
}

export default ChatMessage
