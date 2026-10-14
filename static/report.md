# Smart Campus Network Architecture - Final Technical Report
(Project 1 - As per syllabus and textbook: Tanenbaum, A.S., Wetherall, D.J., Computer Networks, 5th Edition, Pearson Education, 2014)

## 1. Introduction
This project presents the design of a network architecture for a college smart campus. The scope includes classrooms, laboratories, administration, IoT devices, and guest users. The design strictly follows the prescribed syllabus (UNIT-I to UNIT-V) and covers all required modules with minimal viable implementation.

## 2. Requirements and Traffic Analysis (Module 1)
### 2.1 Requirements
- Support academic, administrative, IoT, and guest traffic
- Scalability for expansion
- Basic reliability with identification of bottlenecks/SPOF
- Adherence to layered architecture (OSI/TCP-IP)

### 2.2 Node Estimation (Hands-on)
Nodes are estimated per segment considering typical device density. Calculations are implemented programmatically (Python) for bandwidth/link utilization/traffic requirements (as specified).

### 2.3 Traffic Requirements
Traffic is assumed to be a mix of web, file access, email, and lightweight IoT telemetry. Average per-device bandwidth is parameterized with peak factor to estimate peak total traffic.

## 3. Topology and Hardware Selection (Module 2)
### 3.1 Topology Selection
Three topologies are compared: Star, Tree, and Hybrid. Hybrid (Star + Tree) is selected for campus scale - combining centralized access (Star) with hierarchical aggregation (Tree).

### 3.2 Hardware Selection
- Core Router (Layer 3): Interconnection, edge/gateway functionality
- Distribution Switch (L2/L3): Aggregation
- Access Switches (Layer 2): End-device connectivity
- Access Points (AP): Wireless transmission (IEEE 802.11 concept)
- Gateway: Protocol conversion/edge as per UNIT-I

## 4. OSI/TCP-IP Layer Mapping (Module 3)
Layer mapping is provided aligning functions with OSI and TCP/IP models, covering concepts across all units:
- Physical (1) / Network Access: Guided (Twisted Pair, Coax, Fiber), Wireless (UNIT-I)
- Data Link (2) / Network Access: Framing, error detection/correction, ARQ (Stop&Wait, Go-Back-N, Selective Repeat), MAC (ALOHA, CSMA) (UNIT-II)
- Network (3) / Internet: Routing (Shortest Path, Flooding, Distance Vector, Link State, OSPF, BGP), QoS, IPv4/IPv6 (UNIT-III)
- Transport (4) / Transport: TCP, UDP, Connection Establishment/Release, Sliding Window, Flow/Congestion Control, Sockets (UNIT-IV)
- Application (5) / Application: DNS, SMTP, FTP, TELNET, SNMP (UNIT-V)

## 5. Network Performance Estimation (Module 4)
Bandwidth, peak traffic, and link utilization are estimated using Python-based calculations. Core link utilization is computed as (Peak Required / Core Link) * 100%. Values are parameterized for demonstration.

## 6. Design Validation (Module 5)
### 6.1 Simulated Architecture
Hierarchical core-distribution-access with logical segmentation (Academic, Admin, IoT, Guest). Conceptual simulation aligns with Cisco Packet Tracer approach.

### 6.2 Bottlenecks and Single Points of Failure
Bottlenecks identified: core uplink, wireless AP contention, shared access links. Single Points of Failure (SPOF): core router, distribution switch, core uplink. Mitigations (minimal) noted.

## 7. Conclusion
The proposed minimum viable design satisfies all modules and syllabus requirements. It provides a structured, layered approach consistent with Tanenbaum's Computer Networks (5th Ed).

## References
1. Tanenbaum, A.S., Wetherall, D.J. (2014). Computer Networks, 5th Edition, Pearson Education.
2. Prescribed syllabus (UNIT-I to V). 
