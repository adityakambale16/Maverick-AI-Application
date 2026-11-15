import { createContext, useContext, useState } from "react";
import { getReply } from "../data/responses";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    const activeChat = chats.find(chat => chat.id === activeChatId);

    const sendMessage = (text) => {
        const cleanText = text.trim();
        if (cleanText === "" || isTyping) return;

        const userMessage = { id: Date.now(), role: 'user', text: cleanText };
        let chatId = activeChatId;

        if (chatId === null) {
            // first message of a new conversation: title comes from this message
            chatId = Date.now();
            setChats(prevChats => [
                { id: chatId, title: cleanText.slice(0, 30), messages: [userMessage] },
                ...prevChats
            ]);
            setActiveChatId(chatId);
        }else{
            setChats(prevChats => prevChats.map(chat =>
                chat.id === chatId
                    ? {...chat, messages: [...chat.messages, userMessage]}
                    : chat 
            ));
        }

        setIsTyping(true);

        setTimeout(() => {
            const aiMessage = {id: Date.now() + 1, role: 'ai', text: getReply(cleanText)};
            setChats(prevChats => prevChats.map(chat =>
                chat.id === chatId
                    ? {...chat, messages: [...chat.messages, aiMessage] }
                    : chat
            ));
            setIsTyping(false);
        }, 1200);
    };

    const newChat = () => setActiveChatId(null);

    const selectChat = (id) => setActiveChatId(id);

    const deleteChat = (id) => {
        setChats(chats.filter(chat => chat.id !== id));
        if(id === activeChatId) setActiveChatId(null);
    };

    const clearAllChats = () => {
        setChats([]);
        setActiveChatId(null);
    };

    return(
        <ChatContext.Provider value={{
            chats, activeChat, activeChatId, isTyping,
            sendMessage, newChat, selectChat, deleteChat, clearAllChats
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider

export const useChat = () => useContext(ChatContext)