import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact'
// import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Summary from './components/Summary'
import './App.css'

function App() {

  return (
    <>
        <Header />
        <Routes >
            <Route element={<Summary/>} path="/"/>
            <Route element={<Projects/>} path="/projects"/>
            <Route element={<Experience/>} path="/experience"/>
            <Route element={<Contact/>} path="/contact"/>
        </Routes>
    </>
  )
}

export default App
