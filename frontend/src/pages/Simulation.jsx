import './pages.css'

export default function Simulation() {
  return (
    <>
      <div className="card">
        <h2>Using Cisco Packet Tracer (CPT) here</h2>
        <ul>
          <li><b>Main simulation:</b> Create the hybrid topology in Cisco Packet Tracer (.pkt). This is what faculty expects.</li>
          <li><b>Python:</b> Only for bandwidth, link utilization & traffic requirements (Module 4).</li>
          <li><b>Keep minimal:</b> Show core router, distribution switch, access switches, AP, few PCs per segment to prove concept.</li>
        </ul>
      </div>

      <div className="card">
        <h2>Suggested CPT Steps (bare minimum)</h2>
        <ol style={{marginLeft:20}}>
          <li>Open Cisco Packet Tracer → New</li>
          <li>Place: 1x Router (2811/Generic), 1x Multilayer/2960 Switch, 4x Access Switches, 1x Wireless AP, PCs for each segment</li>
          <li>Connect with Copper/Fiber as appropriate</li>
          <li>Assign IPs (IPv4) per VLAN; note IPv6 concept (UNIT-III)</li>
          <li>Test connectivity (ping) between segments</li>
          <li>Save as <code>sims/smart_campus.pkt</code></li>
          <li>Take topology + config screenshots → put in <code>docs/screenshots/</code></li>
        </ol>
      </div>

      <div className="card">
        <h2>Bottlenecks & Single Points of Failure</h2>
        <div className="grid">
          <div>
            <h3>Bottlenecks</h3>
            <ul>
              <li>Core uplink between Core & Distribution (peak saturation)</li>
              <li>Wireless AP contention (minimal design)</li>
              <li>Shared access links</li>
            </ul>
          </div>
          <div>
            <h3>Single Points of Failure (SPOF)</h3>
            <ul>
              <li>Core Router</li>
              <li>Distribution Switch (DS-1)</li>
              <li>Core uplink</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Configuration Notes</h2>
        <ul>
          <li>Segmentation via VLANs (Academic/Admin/IoT/Guest)</li>
          <li>Inter-VLAN routing at core/distribution (concept)</li>
          <li>Switching: MAC learning, store-and-forward</li>
          <li>Routing concept: static/OSPF</li>
          <li>IPv6 noted as per UNIT-III</li>
        </ul>
      </div>
    </>
  )
}