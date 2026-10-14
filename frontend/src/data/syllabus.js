export const mappingOsiTcpip = [
  {function:"Physical media, bits", osi:"Physical (1)", tcpip:"Network Access", concepts:"Twisted Pair, Coax, Fiber, Wireless (UNIT-I)"},
  {function:"Frames, MAC, Error detection/correction", osi:"Data Link (2)", tcpip:"Network Access", concepts:"Framing, CRC, ARQ, Stop&Wait, GBN, SR, ALOHA, CSMA (UNIT-II)"},
  {function:"Packets, routing, addressing", osi:"Network (3)", tcpip:"Internet", concepts:"IPv4/IPv6, Shortest Path, DV, LS, OSPF, BGP, QoS (UNIT-III)"},
  {function:"Segments, end-to-end, reliability", osi:"Transport (4)", tcpip:"Transport", concepts:"TCP, UDP, Flow/Congestion Control, Sockets (UNIT-IV)"},
  {function:"Apps, services", osi:"Application (5)", tcpip:"Application", concepts:"DNS, SMTP, FTP, TELNET, SNMP (UNIT-V)"}
]

export const topoComparison = [
  {name:"Star", pros:"Simple, fault isolation, centralized", cons:"Hub/Switch SPOF, limited by center", use:"Access layer"},
  {name:"Tree", pros:"Hierarchical, scalable", cons:"Root SPOF, backbone critical", use:"Distribution/Core"},
  {name:"Hybrid (Selected)", pros:"Flexible, combines star+tree", cons:"Slightly complex", use:"Overall campus"}
]

export const hardware = [
  {comp:"Core Router", type:"Layer 3 Router", purpose:"Interconnect + edge/gateway", layer:"Layer 3"},
  {comp:"Distribution Switch", type:"L2/L3 Switch", purpose:"Aggregation", layer:"L2/L3"},
  {comp:"Access Switches", type:"Layer 2 Switch", purpose:"Connect end devices", layer:"Layer 2"},
  {comp:"Access Point (AP)", type:"Wireless AP", purpose:"Wi-Fi (Wireless TX)", layer:"Physical+Data Link"},
  {comp:"Gateway", type:"Gateway", purpose:"Protocol conversion/edge", layer:"Conceptual (All)"}
]