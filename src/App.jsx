import { useState } from 'react'
import DownloadResume from './components/DownloadResume'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Summary from './components/Summary'
import './App.css'

function App() {

  return (
    <>
        <Header />
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <DownloadResume />
    </>
  )
}

export default App
