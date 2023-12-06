import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
        <Header />
        <Routes >
            <Route element={<Home/>} path="/"/>
            <Route element={<Portfolio/>} path="/portfolio"/>
            <Route element={<Resume/>} path="/resume"/>
            <Route element={<Contact/>} path="/contact"/>
        </Routes>
    </>
  )
}

export default App
