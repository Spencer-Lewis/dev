import { Route, Routes } from "react-router-dom";
import ContactPage from './pages/Contact'
import ResumePage from './pages/Resume'
import Header from './components/Header'
import ProjectsPage from './pages/Projects'
import SummaryPage from './pages/Summary'
import './App.css'

function App() {

  return (
    <>
        <Header />
        <Routes >
            <Route element={<SummaryPage/>} path="/"/>
            <Route element={<ProjectsPage/>} path="/projects"/>
            <Route element={<ResumePage/>} path="/resume"/>
            <Route element={<ContactPage/>} path="/contact"/>
        </Routes>
    </>
  )
}

export default App
