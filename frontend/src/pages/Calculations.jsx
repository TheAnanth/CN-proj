import { useState } from 'react'
import './pages.css'

export default function Calculations() {
  const [form, setForm] = useState({
    num_classrooms:5,num_labs:3,num_admin:2,num_iot:2,num_guests:1,
    devices_per_class:30,devices_per_lab:25,devices_per_admin:10,devices_per_iot:15,devices_per_guest:20,
    avg_bw_mbps_per_device:1.0,peak_factor:1.5,core_link_mbps:1000
  })
  const [res, setRes] = useState(null)
  const [err, setErr] = useState('')

  function change(e){ setForm({...form,[e.target.name]:Number(e.target.value)}) }

  function calcLocal(){
    setErr(''); setRes(null)
    try{
      const f=form
      const nodes = f.num_classrooms*f.devices_per_class + f.num_labs*f.devices_per_lab + f.num_admin*f.devices_per_admin + f.num_iot*f.devices_per_iot + f.num_guests*f.devices_per_guest
      const base = nodes*f.avg_bw_mbps_per_device
      const peak = base*f.peak_factor
      const util = f.core_link_mbps>0 ? (peak/f.core_link_mbps*100):0
      setRes({nodes:Math.round(nodes), base_total_mbps:base.toFixed(2), peak_total_mbps:peak.toFixed(2), core_link_mbps:f.core_link_mbps, link_utilization_percent:util.toFixed(2), note:"Pure client-side metric (matches Python logic)"})
    }catch(e){setErr(e.message)}
  }

  return (
    <>
      <div className="card">
        <h2>Traffic Estimation (Python-style, client-side for demo)</h2>
        <p>Python is meant only for bandwidth/link utilization/traffic. You can also run <code>scripts/calculations.py</code> via CLI.</p>
        <div className="grid">
          <div>
            <label>Classrooms</label><input name="num_classrooms" type="number" value={form.num_classrooms} onChange={change}/>
            <label>Labs</label><input name="num_labs" type="number" value={form.num_labs} onChange={change}/>
            <label>Admin</label><input name="num_admin" type="number" value={form.num_admin} onChange={change}/>
            <label>IoT</label><input name="num_iot" type="number" value={form.num_iot} onChange={change}/>
            <label>Guests</label><input name="num_guests" type="number" value={form.num_guests} onChange={change}/>
          </div>
          <div>
            <label>Devices/Class</label><input name="devices_per_class" type="number" value={form.devices_per_class} onChange={change}/>
            <label>Devices/Lab</label><input name="devices_per_lab" type="number" value={form.devices_per_lab} onChange={change}/>
            <label>Devices/Admin</label><input name="devices_per_admin" type="number" value={form.devices_per_admin} onChange={change}/>
            <label>Devices/IoT</label><input name="devices_per_iot" type="number" value={form.devices_per_iot} onChange={change}/>
            <label>Devices/Guest</label><input name="devices_per_guest" type="number" value={form.devices_per_guest} onChange={change}/>
          </div>
          <div>
            <label>Avg BW (Mbps/device)</label><input name="avg_bw_mbps_per_device" step="0.1" type="number" value={form.avg_bw_mbps_per_device} onChange={change}/>
            <label>Peak Factor</label><input name="peak_factor" step="0.1" type="number" value={form.peak_factor} onChange={change}/>
            <label>Core Link (Mbps)</label><input name="core_link_mbps" type="number" value={form.core_link_mbps} onChange={change}/>
          </div>
        </div>
        <button onClick={calcLocal}>Calculate</button>
      </div>

      <div className="card">
        <h2>Results</h2>
        {err && <p style={{color:'crimson'}}>{err}</p>}
        {res && <pre>{JSON.stringify(res,null,2)}</pre>}
      </div>
    </>
  )
}