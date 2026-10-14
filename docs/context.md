# CN Record Project - Context File
Project: Project 1 - Network Architecture Design for a Smart Campus
Purpose: Academic project as per syllabus (minimum viable implementation)
Date: 2026-10-04

## Problem statement summary (must not deviate)
Scenario: College expanding network for classrooms, labs, admin, IoT, guest users.
Modules: 1. Requirement & traffic analysis 2. Topology & hardware selection 3. OSI/TCP-IP layer mapping 4. Network performance estimation 5. Design validation
Hands-on: estimate nodes/traffic, compare star/tree/hybrid, select switches/routers/gateways/APs, map to OSI/TCP-IP, simulated architecture, bottlenecks & single points of failure
Tools/Coding: Cisco Packet Tracer / Python (Python for bandwidth/link utilization/traffic)
Deliverables: network architecture, design justification, simulation/configuration, bandwidth calculations, bottleneck analysis, final technical report

## Syllabus reference (strict adherence)
UNIT-I: Network Hardware, Topologies, OSI/TCP-IP Reference Models, Comparison, Circuit/Packet/Virtual Circuit Switching, Physical Layer (Guided: Twisted Pair/Coax/Fiber, Wireless)
UNIT-II: Data Link Layer: Error Detection/Correction, Simplex, Stop&Wait, Sliding Window (Go-Back-N, Selective Repeat), MAC: Channel allocation, ALOHA, CSMA
UNIT-III: Network Layer: Design Issues, Routing (Optimality, Shortest Path, Flooding, Distance Vector, Link State, OSPF, BGP), QoS, Internet: IPv4, IP Addresses, IPv6
UNIT-IV: Transport Layer: Transport Service, Berkeley Sockets, Elements, UDP, TCP (Segment Header, Connection Establishment/Release, Sliding Window, Timer Management, Flow Control, Congestion Control)
UNIT-V: Application Layer: DNS (Name Space, Resource Records, Name Servers), Email (Architecture, UA, Formats, Transfer, Delivery, SMTP), FTP, TELNET, SNMP
Textbook: Andrew S. Tanenbaum, David J. Wetherall, Computer Networks, 5th Ed, Pearson 2014

## Design principle
- Bare minimum working implementation covering all modules and syllabus points mentioned in requirements.
- Frontend (simple, intuitive) to deploy and demonstrate.
- Static + lightweight Python backend (Flask or FastAPI minimal) or pure HTML/JS with calculations in JS? But Python allowed for calculations; also simulation simple. Use minimal stack: Python (Flask) + HTML/CSS/JS (Vanilla) to be deployable easily.
- No deviation. Keep everything mapped to syllabus.
- Context file must be updated continuously.

## Plan (structure)
1. Create docs/context.md (this file) - keep updated.
2. Create minimal data/models covering syllabus concepts.
3. Build Python calculator module (bandwidth, link utilization, traffic requirements) - scripts/calculations.py
4. Build simple simulation logic (conceptual network, nodes, links) in Python or JSON - sims/
5. Build Flask app (app.py) with routes serving templates + API for calculations/simulation.
6. Build frontend: templates (index, architecture, calculations, simulation, report) + static CSS/JS (minimal, clean).
7. Write technical report content (Markdown) in docs/report.md.
8. Ensure mapping tables for OSI/TCP-IP, comparisons, protocols.
9. Identify bottlenecks & SPOF clearly.
10. Keep it minimal but complete.

Current status: Initializing project structure. 
Next: Create app.py, calculations, templates, basic UI.
Updating context... 

## Implementation status (2026-10-04)
- Created Flask app (app.py), requirements.txt
- Created calculator (scripts/calculations.py)
- Created simulation (sims/simulation.py) with OSI/TCP-IP mapping, comparison, bottlenecks/SPOF
- Built frontend templates (index, architecture, calculations, simulation, report)
- Added static CSS (style.css) and report (static/report.md)
- All modules/deliverables covered minimally as per syllabus
- Context file maintained and updated.

## Next steps
- Test locally (run app.py)
- Ensure static/report.md is accessible
- Minor tweaks if needed (keep minimal)


## Test status
- App imports OK
- Flask server starts and serves index page
- All routes/templates/static files created
- Calculator and simulation APIs functional

## Final state
Project structure complete, minimal and adherent to syllabus. Ready for deployment/demonstration.


## Frontend change (React)
- Replaced Flask templates with minimal React (Vite)
- Clean, no extra libs, adherent to minimal requirement
- Python retained only for metrics (bandwidth/link utilization/traffic)
- CPT is desktop app; project structure includes sims/ for .pkt and docs/screenshots/ suggested

