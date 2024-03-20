'''This program is meant for educational purposes. Do not use for other purposes. No Warranty of Any Kind. Thanks JR'''
#imports 
from flask import Flask, render_template, send_file, request, jsonify
from routes import *
from utils.image_generator import get_random_image_io
import subprocess
import datetime
import platform
import requests
import time
from pylogix import PLC
import random
from Reading import pump1alarmtimestamp, pump2alarmtimestamp, pump3alarmtimestamp, pump4alarmtimestamp, pump5alarmtimestamp, pump_1_status_description, pump1alarmdescriptions, pump2alarmdescriptions, pump3alarmdescriptions, pump4alarmdescriptions, pump5alarmdescriptions, pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, toggle_pump_1, toggle_pump_2, toggle_pump_3, toggle_pump_4, toggle_pump_5, read_plc_tag, update_circle_color, update_alarm_tags_all_pumps, toggle_pump_1

app = Flask(__name__)
app.register_blueprint(main_bp)
app.register_blueprint(data_bp)
app.register_blueprint(page_2_bp)
app.register_blueprint(page_3_bp)
app.register_blueprint(page_4_bp)
app.register_blueprint(page_5_bp)
app.register_blueprint(page_6_bp)
print("WEBSERVER starting Jeff")

#assemble index
@app.route('/index.html')
def index():
    print("Accessing index route.")
    # Render HTML template with time and temperature
    return render_template('index.html')
#gather server Ip for client
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
    return jsonify({'server_ip': ip_address})
    
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

pump1stat = ''
pump2stat = ''
pump3stat = ''
pump4stat = ''
pump5stat = ''

storedpsip1 = []
storedpsip2 = []
storedpsip3 = []
storedpsip4 = []
storedpsip5 = []
storedtime = []




@app.route('/simulate_plc_data')
def simulate_plc_data():
    # Simulate pump vacuum data
    global storedpsip1
    global storedtime
    print("storedpsip1 is: " + str(storedpsip1))
    if storedpsip1 == '':
        pump_vacuum_data = [random.randint(-5, -1) for _ in range(5)]
        storedtime.append(datetime.datetime.now())
    else:
        pump_vacuum_data = [random.randint(-35, -8) for _ in range(5)]
        storedtime.append(datetime.datetime.now())
    # Simulate separator pressure data, rounded two places
    separator_pressure_data = [round(random.uniform(1, 6), 2) for _ in range(5)]
    return pump_vacuum_data, separator_pressure_data

# Routes for pump 1
@app.route('/get_pump1vacuum_data')
def get_pump1vacuum_data():
    if pump1stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        storedpsip1.append(pump_vacuum_data[1]) 
        return jsonify({'pump1vacuum': pump_vacuum_data[1]})
    else:
        storedpsip1.append(0) 
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
        storedpsip2.append(pump_vacuum_data[1])
        return jsonify({'pump2vacuum': pump_vacuum_data[1]})
    else:
        storedpsip2.append(0)
        return jsonify({'pump2vacuum': 0})

@app.route('/get_VACUUM_2_SEPARATOR_PRESSURE_data')
def get_VACUUM_2_SEPARATOR_PRESSURE_data():
    if pump2stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator2_psi': separator_pressure_data[1]})
    else:
        return jsonify({'seperator2_psi': 0})

# Routes for pump 3 
@app.route('/get_pump3vacuum_data')
def get_pump3vacuum_data():
    if pump3stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        storedpsip3.append(pump_vacuum_data[1])
        return jsonify({'pump3vacuum': pump_vacuum_data[1]})
    else:
        storedpsip3.append(0)
        return jsonify({'pump3vacuum': 0})

@app.route('/get_VACUUM_3_SEPARATOR_PRESSURE_data')
def get_VACUUM_3_SEPARATOR_PRESSURE_data():
    if pump3stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator3_psi': separator_pressure_data[1]})
    else:
        return jsonify({'seperator3_psi': 0})

# Routes for pump 4 
@app.route('/get_pump4vacuum_data')
def get_pump4vacuum_data():
    if pump4stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        storedpsip4.append(pump_vacuum_data[1])
        return jsonify({'pump4vacuum': pump_vacuum_data[1]})
    else:
        storedpsip4.append(0)
        return jsonify({'pump4vacuum': 0})

@app.route('/get_VACUUM_4_SEPARATOR_PRESSURE_data')
def get_VACUUM_4_SEPARATOR_PRESSURE_data():
    if pump4stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator4_psi': separator_pressure_data[1]})
    else:
        return jsonify({'seperator4_psi': 0})

# Routes for pump 5 
@app.route('/get_pump5vacuum_data')
def get_pump5vacuum_data():
    if pump5stat == '1':
        pump_vacuum_data, _ = simulate_plc_data()
        storedpsip5.append(pump_vacuum_data[1])
        return jsonify({'pump5vacuum': pump_vacuum_data[1]})
    else:
        storedpsip5.append(0)
        return jsonify({'pump5vacuum': 0})

@app.route('/get_VACUUM_5_SEPARATOR_PRESSURE_data')
def get_VACUUM_5_SEPARATOR_PRESSURE_data():
    if pump5stat == '1':
        _, separator_pressure_data = simulate_plc_data()
        return jsonify({'seperator5_psi': separator_pressure_data[1]})
    else:
        return jsonify({'seperator5_psi': 0})

@app.route('/toggle_pump_1', methods=['POST'])
def toggle_pump_1_route():
        # Call the toggle_pump_1 function from the reading.py file
        result = toggle_pump_1()
        print("should be toggling pump 1")
        return result

@app.route('/toggle_pump_2', methods=['POST'])
def toggle_pump_2_route():
        # Call the toggle_pump_2 function from the reading.py file
        result = toggle_pump_2()
        print("should be toggling pump 2")
        return result

@app.route('/toggle_pump_3', methods=['POST'])
def toggle_pump_3_route():
        # Call the toggle_pump_3 function from the reading.py file
        result = toggle_pump_3()
        print("should be toggling pump 3")
        return result

@app.route('/toggle_pump_4', methods=['POST'])
def toggle_pump_4_route():
        # Call the toggle_pump_4 function from the reading.py file
        result = toggle_pump_4()
        print("should be toggling pump 4")
        return result

@app.route('/toggle_pump_5', methods=['POST'])
def toggle_pump_5_route():
        # Call the toggle_pump_5 function from the reading.py file
        result = toggle_pump_5()
        print("should be toggling pump 5")
        return result

'''Utilities'''
@app.route('/get_circle_color')
def get_circle_color():
    circle_colors_tuple = update_circle_color()
    circle_colors = circle_colors_tuple[0]
    
pump_1_alarm_desciptions = ''

@app.route('/check_animation_status')
def check_animation_status():
    global pump1stat
    global pump2stat
    global pump3stat
    global pump4stat
    global pump5stat
    global pump_1_alarm_desciptions
    results = []
    circle_colors_tuple = update_circle_color()
    circle_colors = circle_colors_tuple[0]
    pump_1_alarm_desciptions = circle_colors_tuple[6]
    pump_2_alarm_desciptions = circle_colors_tuple[7]
    pump_3_alarm_desciptions = circle_colors_tuple[8]
    pump_4_alarm_desciptions = circle_colors_tuple[9]
    pump_5_alarm_desciptions = circle_colors_tuple[10]
    print(pump_1_alarm_desciptions)
    if circle_colors['pump1color'] == 'green':
        print("updating pump 1 status to green")
        results.append({'status': 'Animation 1 started'})
        #sets alarm status to none
        pump_1_status_value = 0
        pump1stat = '1'
        print("updating pump 1 stat")
        
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
        pump3stat = '1'
        pump_3_status_value = 0
    elif circle_colors['pump3color'] != 'green':
        results.append({'status': 'Animation 3 stopped'})
        print("updating pump 3 status to red")
        pump3stat = '0'
        pump_3_status_value = 1
    if circle_colors['pump4color'] == 'green':
        results.append({'status': 'Animation 4 started'})
        print("updating pump 4 status to green")
        pump4stat = '1'
        pump_4_status_value = 0
    elif circle_colors['pump4color'] != 'green':
        results.append({'status': 'Animation 4 stopped'})
        print("updating pump 4 status to red") 
        pump4stat = '0'
        pump_4_status_value = 1
    if circle_colors['pump5color'] == 'green':
        results.append({'status': 'Animation 5 started'})
        print("updating pump 5 status to green")
        pump5stat = '1'
        pump_5_status_value = 0
    elif circle_colors['pump5color'] != 'green':
        results.append({'status': 'Animation 5 stopped'})
        print("updating pump 5 status to red")   
        pump5stat = '0'
        pump_5_status_value = 1
    return jsonify(results, circle_colors,pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, pump_1_alarm_desciptions, pump_2_alarm_desciptions, pump_3_alarm_desciptions, pump_4_alarm_desciptions, pump_5_alarm_desciptions)

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
    # Write graph data to the text file 
    file_path = 'graph_data.txt'
    try:
        with open(file_path, 'a') as file:
            file.write(json_data + '\n')  
        print('Graph data saved to file:')
        return jsonify(success=True), 200
    except Exception as e:
        print('Error saving graph data:', e)
        return jsonify(error='Error saving graph data'), 500
    

pump1currentdata = []
pump1frequencydata = []
pump1voltagedata = []
pump1wattagedata = []
#pump1timestamp = [] been renamed

import threading
import time

pumpmastertimestamp = []  # Renamed variable

def update_pump_data():
    global pump1currentdata
    global pump1frequencydata
    global pump1voltagedata
    global pump1wattagedata
    global pumpmastertimestamp
    
    # Check if any list exceeds 120 length
    if len(pump1currentdata) > 120:
        pump1currentdata = pump1currentdata[60:]  # keeping the list double overhead
    if len(pump1frequencydata) > 120:
        pump1frequencydata = pump1frequencydata[60:] 
    if len(pump1voltagedata) > 120:
        pump1voltagedata = pump1voltagedata[60:]  
    if len(pump1wattagedata) > 120:
        pump1wattagedata = pump1wattagedata[60:]  
    if len(pumpmastertimestamp) > 120:
        pumpmastertimestamp = pumpmastertimestamp[60:] 
    
    # SIMULATING PUMP DATA
    pumpmastertimestamp.append(datetime.datetime.now())
    pump1currentdata.append(random.randint(1, 8))
    pump1frequencydata.append(random.randint(0, 60))
    pump1voltagedata.append(random.randint(477, 484))
    pump1wattagedata.append(random.randint(5, 10))
       
@app.route('/get_pump_1_monitordata', methods=['GET'])
def get_pump_1_monitordata():
    update_pump_data()
    global pump1currentdata
    global pump1frequencydata
    global pump1voltagedata
    global pump1wattagedata
    global pumpmastertimestamp  # Renamed variable
    data = {
        "timestamps": pumpmastertimestamp,  
        "current": pump1currentdata,
        "frequency": pump1frequencydata,
        "voltage": pump1voltagedata,
        "wattage": pump1wattagedata
    }
    print(data)
    return jsonify(data)


@app.route('/get_data_pumps', methods=['GET'])
def get_data_pumps():
    global pumpmastertimestamp
    global storedpsip1
    global storedpsip2
    global storedpsip3
    global storedpsip4
    global storedpsip5
    data = {
        "timestamps": pumpmastertimestamp,
        "psip1": storedpsip1,
        "psip2": storedpsip2,
        "psip3": storedpsip3,
        "psip4": storedpsip4,
        "psip5": storedpsip5
    }
    return jsonify(data)

@app.route('/get_pump_1_alarm_history', methods=['GET'])
def get_pump_1_alarm_history():
    global pump1alarmtimestamp
    global pump1alarmdescriptions
    print(pump1alarmtimestamp,"pump1alarmtimestamp")
    data = {
        "timestamps": pump1alarmtimestamp,
        "descriptions": pump1alarmdescriptions
    }
    return jsonify(data)

@app.route('/get_pump_2_alarm_history', methods=['GET'])
def get_pump_2_alarm_history():
    global pump2alarmtimestamp
    global pump2alarmdescriptions
    print(pump2alarmtimestamp,"pump2alarmtimestamp")
    data = {
        "timestamps": pump2alarmtimestamp,
        "descriptions": pump2alarmdescriptions
    }
    return jsonify(data)
@app.route('/get_pump_3_alarm_history', methods=['GET'])
def get_pump_3_alarm_history():
    global pump3alarmtimestamp
    global pump3alarmdescriptions
    print(pump3alarmtimestamp,"pump3alarmtimestamp")
    data = {
        "timestamps": pump3alarmtimestamp,
        "descriptions": pump3alarmdescriptions
    }
    return jsonify(data)
@app.route('/get_pump_4_alarm_history', methods=['GET'])
def get_pump_4_alarm_history():
    global pump4alarmtimestamp
    global pump4alarmdescriptions
    print(pump4alarmtimestamp,"pump4alarmtimestamp")
    data = {
        "timestamps": pump4alarmtimestamp,
        "descriptions": pump4alarmdescriptions
    }
    return jsonify(data)
@app.route('/get_pump_5_alarm_history', methods=['GET'])
def get_pump_5_alarm_history():
    global pump5alarmtimestamp
    global pump5alarmdescriptions
    print(pump5alarmtimestamp,"pump5alarmtimestamp")
    data = {
        "timestamps": pump5alarmtimestamp,
        "descriptions": pump5alarmdescriptions
    }
    return jsonify(data)
if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, use_reloader=True)