import './pages.css'
import { mappingOsiTcpip, topoComparison, hardware } from '../data/syllabus'

export default function Architecture() {
  return (
    <>
      <div className="card">
        <h2>Proposed Architecture (Hybrid: Star + Tree)</h2>
        <p>Core (Router) → Distribution (L2/L3) → Access (Switches/APs). Segmented: Academic, Admin, IoT, Guest.</p>
        <pre>{`CORE ROUTER (L3)
        |
DISTRIBUTION SWITCH (L2/L3)
        ├── AS-ACAD (Classrooms/Labs)
        ├── AS-ADM  (Admin)
        ├── AS-IOT  (IoT)
        └── AS-GUEST (Guest) + AP-1 (Wi-Fi)`}</pre>
      </div>

      <div className="card">
        <h2>Topology Comparison</h2>
        <table>
          <thead><tr><th>Topology</th><th>Pros</th><th>Cons</th><th>Use</th></tr></thead>
          <tbody>
            {topoComparison.map(t => (
              <tr key={t.name}><td>{t.name}</td><td>{t.pros}</td><td>{t.cons}</td><td>{t.use}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Hardware Selection</h2>
        <table>
          <thead><tr><th>Component</th><th>Type</th><th>Purpose</th><th>Layer</th></tr></thead>
          <tbody>
            {hardware.map(h => (
              <tr key={h.comp}><td>{h.comp}</td><td>{h.type}</td><td>{h.purpose}</td><td>{h.layer}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>OSI/TCP-IP Mapping</h2>
        <table>
          <thead><tr><th>Function</th><th>OSI</th><th>TCP/IP</th><th>Key Concepts (Syllabus)</th></tr></thead>
          <tbody>
            {mappingOsiTcpip.map((m,i)=>(
              <tr key={i}><td>{m.function}</td><td>{m.osi}</td><td>{m.tcpip}</td><td>{m.concepts}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}