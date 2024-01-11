import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'

function App() {
  return (
    <>
        <Header />
        <Routes >
            <Route element={<Home/>} path="/dev"/>
            <Route element={<Portfolio/>} path="/dev/portfolio"/>
            <Route element={<Resume/>} path="/dev/resume"/>
            <Route element={<Contact/>} path="/dev/contact"/>
        </Routes>
    </>
  )
}

export default App
