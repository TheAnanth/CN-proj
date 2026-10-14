# Minimum viable simulated network architecture (conceptual) - covers simulation/configuration
# Mapping to syllabus: UNIT-I topologies, hardware types, mapping concepts

SIM = {
    "name": "Smart Campus Network - Minimum Viable Architecture",
    "scenario": "Classrooms, Laboratories, Administration, IoT devices, Guest users",
    "topology_choice": "Hybrid (Star + Tree)",  # compare as required
    "description": "Hierarchical core-distribution-access with segmentation (bare minimum).",
    "hardware": {
        "core_router": {
            "type": "Router (Layer 3)",
            "purpose": "Interconnect distribution, WAN edge concept",
            "osi_layers": ["Network (Layer 3)", "Data Link (Layer 2)", "Physical (Layer 1)"],
            "notes": "Gateway function between campus and external networks (UNIT-I)"
        },
        "distribution_switches": [
            {"id": "DS-1", "type": "L3/L2 Switch", "purpose": "Aggregation"}
        ],
        "access_switches": [
            {"id": "AS-ACAD", "type": "Layer 2 Switch", "location": "Academic (Classrooms/Labs)"},
            {"id": "AS-ADM", "type": "Layer 2 Switch", "location": "Administration"},
            {"id": "AS-IOT", "type": "Layer 2 Switch", "location": "IoT (isolated VLAN concept)"},
            {"id": "AS-GUEST", "type": "Layer 2 Switch", "location": "Guest (isolated)"}
        ],
        "access_points": [
            {"id": "AP-1", "type": "Wireless AP", "purpose": "Wi-Fi (Wireless transmission, UNIT-I)"}
        ],
        "gateways": [
            {"id": "GW-1", "type": "Gateway", "purpose": "Protocol conversion/edge (UNIT-I)"}
        ]
    },
    "topology_comparison": {
        "star": {
            "pros": ["Simple, easy to manage", "Central control", "Fault isolation per link"],
            "cons": ["Single point of failure at hub/switch", "Scalability limited by center"],
            "use": "Access layer"
        },
        "tree": {
            "pros": ["Scalable hierarchy", "Better organization"],
            "cons": ["Root SPOF", "Backbone critical"],
            "use": "Distribution/Core structure"
        },
        "hybrid": {
            "pros": ["Combines star+tree strengths", "Flexible, scalable", "Pragmatic for campus"],
            "cons": ["Slightly complex"],
            "use": "Overall campus (selected)"
        }
    },
    "segments": {
        "academic": {"users": "Classrooms, Labs", "media": "UTP/Fiber uplinks", "vlan": "VLAN-10"},
        "admin": {"users": "Admin", "media": "UTP", "vlan": "VLAN-20"},
        "iot": {"users": "IoT", "media": "UTP/Wi-Fi", "vlan": "VLAN-30"},
        "guest": {"users": "Guests", "media": "Wi-Fi", "vlan": "VLAN-40"}
    },
    "mapping_osi_tcpip": [
        {"function": "Physical media, bits", "osi": "Physical (1)", "tcpip": "Network Access", "protocols_concepts": "Twisted Pair, Coax, Fiber, Wireless (UNIT-I)"},
        {"function": "Frames, MAC, error detection/correction", "osi": "Data Link (2)", "tcpip": "Network Access", "protocols_concepts": "Framing, CRC, ARQ, Stop&Wait, GBN, SR, ALOHA, CSMA (UNIT-II)"},
        {"function": "Packets, routing, addressing", "osi": "Network (3)", "tcpip": "Internet", "protocols_concepts": "IPv4/IPv6, Shortest Path, DV, LS, OSPF, BGP, QoS (UNIT-III)"},
        {"function": "Segments, end-to-end, reliability", "osi": "Transport (4)", "tcpip": "Transport", "protocols_concepts": "TCP, UDP, Flow/Congestion Control, Sockets (UNIT-IV)"},
        {"function": "Apps, services", "osi": "Application (5)", "tcpip": "Application", "protocols_concepts": "DNS, SMTP, FTP, TELNET, SNMP (UNIT-V)"}
    ],
    "bottlenecks_spof": {
        "bottlenecks": [
            "Core uplink/link between core and distribution (bandwidth saturation under peak)",
            "Single wireless AP in minimal design (contention)",
            "Shared access links"
        ],
        "single_points_of_failure": [
            "Core router (single node)",
            "Distribution switch (DS-1) in minimal design",
            "Uplink/core link"
        ],
        "mitigations_minimal": [
            "Redundancy noted (future enhancement)",
            "Load monitoring",
            "Segmentation/VLANs"
        ]
    },
    "configuration_notes": [
        "Conceptual simulation (minimum viable) - aligns with Cisco Packet Tracer approach.",
        "IP addressing concept: private IPv4 blocks per VLAN; IPv6 noted (UNIT-III).",
        "Switching: store-and-forward concept, MAC learning.",
        "Routing: static/OSPF concept noted."
    ]
}

def get_simulation():
    return SIM
