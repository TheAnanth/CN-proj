import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Architecture from './pages/Architecture'
import Calculations from './pages/Calculations'
import Simulation from './pages/Simulation'
import Report from './pages/Report'
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h1>Project 1: Network Architecture Design for a Smart Campus</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/architecture">Architecture</Link>
          <Link to="/calculations">Bandwidth Calculations</Link>
          <Link to="/simulation">CPT Simulation / Config</Link>
          <Link to="/report">Final Report</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/calculations" element={<Calculations />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      <footer>Academic project – bare minimum, syllabus adherent</footer>
    </>
  )
}