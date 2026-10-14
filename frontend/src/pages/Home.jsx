import './pages.css'

export default function Home() {
  return (
    <>
      <div className="card">
        <h2>Overview</h2>
        <p>Minimum viable design for Smart Campus covering UNIT-I to UNIT-V (Tanenbaum 5th Ed). Focus: requirement/traffic, topology+hardware, OSI/TCP-IP mapping, performance estimation, design validation.</p>
      </div>
      <div className="card">
        <h2>Objectives (as per syllabus)</h2>
        <ul>
          <li>Estimate number of nodes and traffic requirements</li>
          <li>Compare Star, Tree, Hybrid architectures</li>
          <li>Select switches, routers, gateways, access points</li>
          <li>Map communication functions to OSI/TCP-IP layers</li>
          <li>Develop a simulated network architecture</li>
          <li>Identify bottlenecks and single points of failure</li>
        </ul>
      </div>
    </>
  )
}