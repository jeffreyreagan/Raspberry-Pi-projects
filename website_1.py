'''This program is meant for educational purposes. Do not use for other purposes. No Warranty of Any Kind. Thanks JR'''

#imports 
from flask import Flask, render_template, send_file, request, jsonify
from routes import *
from utils.image_generator import get_random_image_io
import subprocess
import datetime
import platform
import requests

#setup
app = Flask(__name__)

app.register_blueprint(main_bp)
app.register_blueprint(data_bp)
app.register_blueprint(page_2_bp)
app.register_blueprint(page_3_bp)
app.register_blueprint(page_4_bp)
app.register_blueprint(page_5_bp)
app.register_blueprint(page_6_bp)

print("WEBSERVER starting Jeff")

#index
@app.route('/')

#determine OS and gather temp data
@app.route('/api/server_ip')
def get_server_ip():
    # Fetch the public IP address using an external API
    try:
        response = requests.get('https://api.ipify.org?format=json')
        if response.status_code == 200:
            ip_address = response.json()['ip']
        else:
            raise Exception('Failed to fetch IP address')
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    # Return the public IP address as JSON
    return jsonify({'server_ip': ip_address})
    
#assemble index
@app.route('/index.html')
def index():
    print("Accessing index route.")
    # Render HTML template with time and temperature
    return render_template('index.html')


#API for random image generator
@app.route('/api/get_random_image')
def get_random_image():
    img_io = get_random_image_io()
    return send_file(img_io, mimetype='image/png')

#Page 2
@app.route('/page_2.html')
def page_2():
    return render_template('page_2.html')

#Page 3
@app.route('/page_3.html')
def page_3_bp():
    return render_template('page_3.html')

#Page 4
@app.route('/page_4.html')
def page_4():
    return render_template('page_4.html')

#Page 5
@app.route('/page_5.html')
def page_5_bp():
    return render_template('page_5.html')

#Page 6
@app.route('/page_6.html')
def page_6():
    return render_template('page_6.html')

#Page 7
@app.route('/page_7.html')
def page_7_bp():
    return render_template('page_7.html')

'''  
git config --global user.email "you@example.com"
git config --global user.name "Your Name

"'''
'''
SCADA Simulation
'''

from flask import Flask, render_template, jsonify
import time
from Reading import read_plc_tag, update_circle_color, update_alarm_tags_all_pumps, toggle_pump_1
from pylogix import PLC
import random
from Reading import pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, toggle_pump_1
pump1stat = '0'
pump2stat = '0'

def simulate_plc_data():
    # Simulate pump vacuum data
   
    pump_vacuum_data = [random.randint(0, 100) for _ in range(5)]
    
    # Simulate alarm status
    
    
    # Simulate separator pressure data
    separator_pressure_data = [random.uniform(0, 10) for _ in range(5)]
    
    return pump_vacuum_data, separator_pressure_data

# Routes for pump 1
@app.route('/get_pump1vacuum_data')
def get_pump1vacuum_data():
    
    if pump1stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        return jsonify({'pump1vacuum': pump_vacuum_data[0]})
    else:
        return jsonify({'pump1vacuum': 0})

    

@app.route('/get_VACUUM_1_SEPARATOR_PRESSURE_data')
def get_VACUUM_1_SEPARATOR_PRESSURE_data():
  
    if pump1stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator1_psi': separator_pressure_data[0]})
    else:
        return jsonify({'seperator1_psi': 0})

# Routes for pump 2
@app.route('/get_pump2vacuum_data')
def get_pump2vacuum_data():
   
    if pump2stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        return jsonify({'pump2vacuum': pump_vacuum_data[1]})
    else:
        return jsonify({'pump2vacuum': 0})


@app.route('/get_VACUUM_2_SEPARATOR_PRESSURE_data')
def get_VACUUM_2_SEPARATOR_PRESSURE_data():
   
    if pump2stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator2_psi': separator_pressure_data[1]})
    else:
        return jsonify({'seperator2_psi': 0})

# Routes for pump 3 (similar structure as pump 2)

# Routes for pump 4 (similar structure as pump 2)

# Routes for pump 5 (similar structure as pump 2)
@app.route('/toggle_pump_1', methods=['POST'])
def toggle_pump_1_route():
    
        # Call the toggle_pump_1 function from the reading.py file
        result = toggle_pump_1()
        print("should be toggling pump 1")
        
        # Assuming `toggle_pump_1` returns a JSON response, no need for jsonify here
        return result



'''Utilities'''
@app.route('/get_circle_color')
def get_circle_color():
    circle_colors_tuple = update_circle_color()
    circle_colors = circle_colors_tuple[0]
    


@app.route('/check_animation_status')
def check_animation_status():
    global pump1stat
    global pump2stat
    results = []
    circle_colors_tuple = update_circle_color()
    circle_colors = circle_colors_tuple[0]
    pump_1_alarm_desciptions = circle_colors_tuple[6]
    print(pump_1_alarm_desciptions)
    if circle_colors['pump1color'] == 'green':
        print("updating pump 1 status to green")
        results.append({'status': 'Animation 1 started'})
        pump_1_status_value = 0
        pump1stat = '1'
    elif circle_colors['pump1color'] != 'green':
        results.append({'status': 'Animation 1 stopped'})
        print("updating pump 1 status to red")
        pump_1_status_value = 1
        pump1stat = '0'
    if circle_colors['pump2color'] == 'green':
        results.append({'status': 'Animation 2 started'})
        print("updating pump 2 status to green")
        pump_2_status_value = 0
        pump2stat = '1'
    elif circle_colors['pump2color'] != 'green':
        results.append({'status': 'Animation 2 stopped'})
        print("updating pump 2 status to red")
        pump_2_status_value = 1
        pump2stat = '0'
    if circle_colors['pump3color'] == 'green':
        print("updating pump 3 status to green")
        results.append({'status': 'Animation 3 started'})
    elif circle_colors['pump3color'] != 'green':
        results.append({'status': 'Animation 3 stopped'})
        print("updating pump 3 status to red")
    if circle_colors['pump4color'] == 'green':
        results.append({'status': 'Animation 4 started'})
        print("updating pump 4 status to green")
    elif circle_colors['pump4color'] != 'green':
        results.append({'status': 'Animation 4 stopped'})
        print("updating pump 4 status to red") 
    if circle_colors['pump5color'] == 'green':
        results.append({'status': 'Animation 5 started'})
        print("updating pump 5 status to green")
    elif circle_colors['pump5color'] != 'green':
        results.append({'status': 'Animation 5 stopped'})
        print("updating pump 5 status to red")   
    return jsonify(results, circle_colors,pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, pump_1_alarm_desciptions)

import json
@app.route('/get_graph_data', methods=['GET'])
def get_graph_data():
    try:
        # Read graph data from the text file
        file_path = 'graph_data.txt'
        graph_data = []

        with open(file_path, 'r') as file:
            for line in file:
                # Parse each line as JSON and append to the list
                graph_data.append(json.loads(line.strip()))

        print('Graph data retrieved from file:')
        return jsonify(graph_data), 200
    except Exception as e:
        print('Error retrieving graph data:', e)
        return jsonify(error='Error retrieving graph data'), 500

@app.route('/save_graph_data', methods=['POST'])
def save_graph_data():
    graph_data = request.json  # Assuming graph data is sent as JSON

    # Convert graph data to a JSON string
    json_data = json.dumps(graph_data)

    # Write graph data to the text file with a newline character
    file_path = 'graph_data.txt'
    try:
        with open(file_path, 'a') as file:
            file.write(json_data + '\n')  # Add newline character
        print('Graph data saved to file:')
        return jsonify(success=True), 200
    except Exception as e:
        print('Error saving graph data:', e)
        return jsonify(error='Error saving graph data'), 500



if __name__ == '__main__':
    app.run(host='localhost', debug=True, use_reloader=True)