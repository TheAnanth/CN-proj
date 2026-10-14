# Minimum viable calculator for bandwidth, link utilization, traffic requirements
# Maps to: Module 4 - Network performance estimation; Tools: Python for bandwidth/link utilization/traffic

class SmartCampusCalculator:
    def __init__(self):
        pass

    def compute_all(self, data):
        """
        data: {
          'num_classrooms': int, 'num_labs': int, 'num_admin': int,
          'num_iot': int, 'num_guests': int,
          'devices_per_class': int, 'devices_per_lab': int,
          'devices_per_admin': int, 'devices_per_iot': int, 'devices_per_guest': int,
          'avg_bw_mbps_per_device': float,
          'peak_factor': float (e.g., 1.5-2.0),
          'core_link_mbps': float (e.g., 1000)
        }
        """
        nc = int(data.get('num_classrooms', 0))
        nl = int(data.get('num_labs', 0))
        na = int(data.get('num_admin', 0))
        ni = int(data.get('num_iot', 0))
        ng = int(data.get('num_guests', 0))

        dpc = int(data.get('devices_per_class', 1))
        dpl = int(data.get('devices_per_lab', 1))
        dpa = int(data.get('devices_per_admin', 1))
        dpi = int(data.get('devices_per_iot', 1))
        dpg = int(data.get('devices_per_guest', 1))

        bwpd = float(data.get('avg_bw_mbps_per_device', 1.0))
        pf = float(data.get('peak_factor', 1.5))
        core = float(data.get('core_link_mbps', 1000))

        nodes = {
            'classrooms': nc * dpc,
            'labs': nl * dpl,
            'admin': na * dpa,
            'iot': ni * dpi,
            'guests': ng * dpg,
        }
        total_nodes = sum(nodes.values())

        base_total = total_nodes * bwpd
        peak_total = base_total * pf

        # simple distribution by segment (minimum viable)
        total_segments = max(1, nc + nl + na + ni + ng)
        core_required = peak_total

        link_util = (core_required / core * 100.0) if core > 0 else 0.0

        return {
            'nodes': nodes,
            'total_nodes': total_nodes,
            'base_total_mbps': round(base_total, 2),
            'peak_total_mbps': round(peak_total, 2),
            'core_required_mbps': round(core_required, 2),
            'core_link_mbps': core,
            'link_utilization_percent': round(link_util, 2),
            'segments': total_segments,
            'notes': 'Minimum viable estimate as per Module 4 requirements.'
        }
