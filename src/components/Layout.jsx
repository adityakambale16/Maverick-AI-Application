import { useState } from "react"
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    // sidebar is open by default on big screens and closed on mobile
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

    const closeOnMobile = () => {
        if(window.innerWidth < 768) setIsOpen(false);
    }

    return (
        <div className="app-shell">
            <Sidebar isOpen={isOpen} closeOnMobile={closeOnMobile} />

            {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div> }

            <main className="main-area">
                <header className="topbar">
                    <button className="icon-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle sidebar">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <span className="topbar-title">Maverick AI</span>
                </header>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout