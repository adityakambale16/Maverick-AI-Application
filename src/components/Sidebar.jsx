import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { useChat } from "../context/ChatContext";

const Sidebar = ({ isOpen, closeOnMobile }) => {
    const {theme, dispatch} = useContext(ThemeContext);
    const {chats, activeChatId, newChat, selectChat, deleteChat} = useChat();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filteredChats = chats.filter(chat => 
        chat.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleNewChat = () => {
        newChat();
        navigate('/home');
        closeOnMobile();
    }

    const handleSelect = (id) => {
        selectChat(id);
        navigate('/home');
        closeOnMobile();
    }

    return (
        <aside className={isOpen ? "sidebar" : "sidebar closed"}>
            <div className="sidebar-brand">
                <span className="brand-logo"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                <span className="brand-name">Maverick AI</span>
            </div>

            <button className="new-chat-btn" onClick={handleNewChat}>
                <i className="fa-solid fa-plus"></i>New chat
            </button>

            <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="search conversations"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <p className="sidebar-label">Recent</p>

            <div className="chat-list">
                {chats.length === 0 && <p className="empty-text">No Conversations yet. Send a message to start one.</p>}
                {chats.length > 0 && filteredChats.length === 0 && <p className="empty-text">No Conversations match your search.</p>}

                {filteredChats.map(chat => (
                    <div
                        key={chat.id}
                        className={chat.id === activeChatId ? "chat-item active" : "chat-item"}
                        onClick={() => handleSelect(chat.id)}
                    >
                        <span className="chat-title">{chat.title}</span>
                        <button
                            className="delete-btn"
                            aria-label="Delete conversation"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteChat(chat.id);
                            }}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                ))}
            </div>

            <div className="sidebar-bottom">
                <NavLink to='/settings' className="sidebar-link" onClick={closeOnMobile}>
                    <i className="fa-solid fa-gear"></i>Settings
                </NavLink>

                <NavLink to="/about" className="sidebar-link" onClick={closeOnMobile}>
                    <i className="fa-solid fa-circle-info"></i> About
                </NavLink>

                <NavLink to="/contact" className="sidebar-link" onClick={closeOnMobile}>
                    <i className="fa-solid fa-envelope"></i> Contact
                </NavLink>

                <NavLink to="/login" className="sidebar-link" onClick={closeOnMobile}>
                    <i className="fa-solid fa-right-to-bracket"></i> Login
                </NavLink>

                <button className="sidebar-link" onClick={() => dispatch({ type: 'THEME_TOGGLE' })}>
                    <i className={theme === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                    {theme === 'dark' ? "Light mode" : "Dark mode"}
                </button>

                <div className="user-profile">
                    <span className="avatar">G</span>
                    <div>
                        <strong>Guest User</strong>
                        <small>Free plan</small>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar