import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
    return(
        <div className="chat-page">
            <ChatWindow />
            <ChatInput />
        </div>
    )
}

export default Home