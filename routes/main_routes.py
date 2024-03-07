from flask import render_template, request, jsonify
from . import main_bp, data_bp
import datetime
import platform
import subprocess

@main_bp.route('/')
def index():
    print('this is the route')
    visitor_ip = request.remote_addr
    print(f"Visitor's IP address: {visitor_ip}")
    # Your existing index route code
    return render_template('index.html', visitor_ip=visitor_ip)


def get_internal_temperature():
    if platform.system() == 'Windows':
        return 0.0
    elif platform.system() == 'Debian':
        result = subprocess.run(['vcgencmd', 'measure_temp'], capture_output=True, text=True)
        temperature_str = result.stdout.strip().replace('temp=', '').replace('\'C', '')
        return float(temperature_str)
    else:
        temperature_str = 0.0
        return float(temperature_str)
    

@data_bp.route('/data')
def get_data():
    print("getting data")
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # Get internal temperature
    temperature = get_internal_temperature()  # Assuming you have this function
    # Prepare data to send as JSON
    data = {'time': current_time, 'temperature': temperature}
    return jsonify(data)