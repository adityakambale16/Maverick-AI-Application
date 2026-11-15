import { useContext } from "react"
import { ThemeContext } from "../components/ThemeContext"
import { useChat } from "../context/ChatContext";

const Settings = () => {
    const {theme, dispatch} = useContext(ThemeContext);
    const {chats, clearAllChats} = useChat();

    const handleClear = () => {
        if(window.confirm('Delete all conversations?')){
            clearAllChats();
        }
    }
    return (
        <div className="settings-page">
            <h2>Settings</h2>

            <div className="settings-card">
                <div>
                    <strong>Appearance</strong>
                    <p>Currently using {theme} mode.</p>
                </div>

                <button className="settings-btn" onClick={() => dispatch({ type: 'THEME_TOGGLE' })}>
                    Switch to {theme === 'dark' ? 'light' : 'dark'}
                </button>
            </div>

            <div className="settings-card">
                <div>
                    <strong>Chat history</strong>
                    <p>{chats.length} saved conversation{chats.length === 1 ? '' : 's'}.</p>
                </div>

                <button className="settings-btn danger" onClick={handleClear} disabled={chats.length === 0}>
                    Delete all
                </button>
            </div>
        </div>
    )
}

export default Settings