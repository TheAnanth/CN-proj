from flask import Flask, render_template, request, jsonify, send_file
import json
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/architecture')
def architecture():
    return render_template('architecture.html')

@app.route('/calculations')
def calculations():
    return render_template('calculations.html')

@app.route('/simulation')
def simulation():
    return render_template('simulation.html')

@app.route('/report')
def report():
    return render_template('report.html')

@app.route('/api/calculate', methods=['POST'])
def api_calculate():
    try:
        data = request.get_json(force=True)
        from scripts.calculations import SmartCampusCalculator
        calc = SmartCampusCalculator()
        res = calc.compute_all(data)
        return jsonify({'ok': True, 'result': res})
    except Exception as e:
        return jsonify({'ok': False, 'error': str(e)}), 400

@app.route('/api/simulation', methods=['GET'])
def api_simulation():
    try:
        from sims.simulation import get_simulation
        return jsonify({'ok': True, 'simulation': get_simulation()})
    except Exception as e:
        return jsonify({'ok': False, 'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
