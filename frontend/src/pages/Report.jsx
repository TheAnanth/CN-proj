import './pages.css'

export default function Report() {
  return (
    <>
      <div className="card">
        <h2>Final Technical Report</h2>
        <p>Use the existing report: <code>static/report.md</code>. For CPT, attach:</p>
        <ul>
          <li>Cisco Packet Tracer file: <code>sims/smart_campus.pkt</code></li>
          <li>Screenshots of topology, interface config, ping results</li>
          <li>Bandwidth calculation sheet (from Python/React calculator)</li>
          <li>Bottleneck & SPOF analysis</li>
        </ul>
      </div>

      <div className="card">
        <h2>Syllabus Mapping</h2>
        <ul>
          <li>UNIT-I: Hardware, Topologies, OSI/TCP-IP, Switching, Physical Media</li>
          <li>UNIT-II: DLL, Error Control, ARQ, MAC (ALOHA,CSMA)</li>
          <li>UNIT-III: Network Layer, Routing, IPv4/IPv6, OSPF/BGP, QoS</li>
          <li>UNIT-IV: Transport, TCP/UDP, Flow/Congestion, Sockets</li>
          <li>UNIT-V: Application: DNS, SMTP, FTP, TELNET, SNMP</li>
        </ul>
      </div>
    </>
  )
}