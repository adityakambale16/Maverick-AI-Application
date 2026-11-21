import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import About from './pages/About'
import { useContext } from 'react'
import ThemeProvider, { ThemeContext } from './components/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Settings from './pages/Settings'
import ChatProvider from './context/ChatContext'
import Signup from './pages/Signup'

function AppContent() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return(
    <ChatProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ChatProvider>
  )
}

export default App
