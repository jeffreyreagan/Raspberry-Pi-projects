from pylogix import PLC
import time
import datetime
from flask import jsonify

def read_plc_tag():
        try:
            with PLC() as comm:
                comm.IPAddress = '172.16.21.12' 
                comm.ProcessorSlot = 0  
                tags = ['VACUUM_1_VACUUM','VACUUM_1_SEPARATOR_PRESSURE','VACUUM_2_VACUUM','VACUUM_2_SEPARATOR_PRESSURE','VACUUM_3_VACUUM','VACUUM_3_SEPARATOR_PRESSURE','VACUUM_4_VACUUM','VACUUM_4_SEPARATOR_PRESSURE','VACUUM_5_VACUUM','VACUUM_5_SEPARATOR_PRESSURE']
                pump1vacuum = None
                pump2vacuum = None
                pump3vacuum = None
                pump4vacuum = None
                pump5vacuum = None
                seperator1_psi = None
                seperator2_psi = None
                seperator3_psi = None
                seperator4_psi = None
                seperator5_psi = None
                
                results = comm.Read(tags)
                for result in results:
                    if result.Status == 'Success':
                        if result.TagName == 'VACUUM_1_VACUUM':
                            result.Value *= 0.1
                            pump1vacuum_formatted = "{:.2f}".format(result.Value)
                            pump1vacuum = str(pump1vacuum_formatted) + " Hg"
                        if result.TagName == 'VACUUM_1_SEPARATOR_PRESSURE':
                            result.Value *= 0.1
                            seperator1_psi_formatted = "{:.2f}".format(result.Value)
                            seperator1_psi = str(seperator1_psi_formatted) + " PSI"
                        if result.TagName == 'VACUUM_2_VACUUM':
                            result.Value *= 0.1
                            pump2vacuum_formatted = "{:.2f}".format(result.Value)
                            pump2vacuum = str(pump2vacuum_formatted) + " Hg"
                        if result.TagName == 'VACUUM_2_SEPARATOR_PRESSURE':
                            result.Value *= 0.1
                            seperator2_psi_formatted = "{:.2f}".format(result.Value)
                            seperator2_psi = str(seperator2_psi_formatted) + " PSI"
                        if result.TagName == 'VACUUM_3_VACUUM':
                            result.Value *= 0.1
                            pump3vacuum_formatted = "{:.2f}".format(result.Value)
                            pump3vacuum = str(pump3vacuum_formatted) + " Hg"
                        if result.TagName == 'VACUUM_3_SEPARATOR_PRESSURE':
                            result.Value *= 0.1
                            seperator3_psi_formatted = "{:.2f}".format(result.Value)
                            seperator3_psi = str(seperator3_psi_formatted) + " PSI"
                        if result.TagName == 'VACUUM_4_VACUUM':
                            result.Value *= 0.1
                            pump4vacuum_formatted = "{:.2f}".format(result.Value)
                            pump4vacuum = str(pump4vacuum_formatted) + " Hg"
                        if result.TagName == 'VACUUM_4_SEPARATOR_PRESSURE':
                            result.Value *= 0.1
                            seperator4_psi_formatted = "{:.2f}".format(result.Value)
                            seperator4_psi = str(seperator4_psi_formatted) + " PSI"
                        if result.TagName == 'VACUUM_5_VACUUM':
                            result.Value *= 0.1
                            pump5vacuum_formatted = "{:.2f}".format(result.Value)
                            pump5vacuum = str(pump5vacuum_formatted) + " Hg"
                        if result.TagName == 'VACUUM_5_SEPARATOR_PRESSURE':
                            result.Value *= 0.1
                            seperator5_psi_formatted = "{:.2f}".format(result.Value)
                            seperator5_psi = str(seperator5_psi_formatted) + " PSI"
                        
                return pump1vacuum, seperator1_psi, pump2vacuum, seperator2_psi, pump3vacuum, seperator3_psi, pump4vacuum, seperator4_psi, pump5vacuum, seperator5_psi
        except Exception as e:
                    print(f"An error occurred: {e}")
import random


# 0 is begginning state, just stopped. 1 is run, 2 is alarm triggered. 
pump_1_status_value = 0
pump_2_status_value = 0
pump_3_status_value = 0
pump_4_status_value = 0
pump_5_status_value = 0

'''def simulate_alarms_p1():
    global pump_1_status_value
    pump_1_status_value = 2
    return pump_1_status_value
'''

def toggle_pump_1():
    global pump_1_status_value
    # Toggling pump status
    pump_1_status_value = 1 - pump_1_status_value
    print("should be changing pump 1 status to", pump_1_status_value)
    # Simulate turning the pump on or off
    if pump_1_status_value == 1:
        time.sleep(2)  
        pump_1_status_description = "Pump is On"
    else:
        time.sleep(2) 
        pump_1_status_description = "Pump is Off"
    return jsonify({'status': pump_1_status_value, 'description': pump_1_status_description})

def toggle_pump_2():
    global pump_2_status_value
    pump_2_status_value = 1 - pump_2_status_value
    print("should be changing pump 2 status to", pump_2_status_value)
    if pump_2_status_value == 1:
        time.sleep(2) 
        pump_2_status_description = "Pump 2 is On"
    else:
        time.sleep(2) 
        pump_2_status_description = "Pump 2 is Off"
    return jsonify({'status': pump_2_status_value, 'description': pump_2_status_description})

def toggle_pump_3():
    global pump_3_status_value
    pump_3_status_value = 1 - pump_3_status_value
    print("should be changing pump 3 status to", pump_3_status_value)
    if pump_3_status_value == 1:
        time.sleep(2)  
        pump_3_status_description = "Pump is On"
    else:
        time.sleep(2)  
        pump_3_status_description = "Pump is Off"
    return jsonify({'status': pump_3_status_value, 'description': pump_3_status_description})


def toggle_pump_4():
    global pump_4_status_value
    pump_4_status_value = 1 - pump_4_status_value
    print("should be changing pump 4 status to", pump_4_status_value)
    if pump_4_status_value == 1:
        time.sleep(2) 
        pump_4_status_description = "Pump 4 is On"
    else:
        time.sleep(2) 
        pump_4_status_description = "Pump 4 is Off"
    return jsonify({'status': pump_4_status_value, 'description': pump_4_status_description})


def toggle_pump_5():
    global pump_5_status_value
    pump_5_status_value = 1 - pump_5_status_value
    print("should be changing pump 5 status to", pump_5_status_value)
    if pump_5_status_value == 1:
        time.sleep(2)  
        pump_5_status_description = "Pump 5 is On"
    else:
        time.sleep(2)
        pump_5_status_description = "Pump 5 is Off"
    return jsonify({'status': pump_5_status_value, 'description': pump_5_status_description})

pump_1_status_description = ''
pump_2_status_description = ''
pump_3_status_description = ''
pump_4_status_description = ''
pump_5_status_description = ''

pump1alarmtimestamp = []
pump2alarmtimestamp = []
pump3alarmtimestamp = []
pump4alarmtimestamp = []
pump5alarmtimestamp = []

pump1alarmdescriptions = []
pump2alarmdescriptions = []

def randomize_alarm_status():
    time.sleep(5)
    global pump_1_status_value
    global pump_2_status_value
    global pump_3_status_value
    global pump_4_status_value
    global pump_5_status_value
    global pump_1_status_description
    global pump_2_status_description
    global pump_3_status_description
    global pump_4_status_description
    global pump_5_status_description
    global pump1alarmtimestamp
    global pump2alarmtimestamp
    global pump3alarmtimestamp
    global pump4alarmtimestamp
    global pump5alarmtimestamp
    global pump1alarmdescriptions
    global pump2alarmdescriptions
    
    if pump_1_status_value == 0 and not pump_1_status_description:
        pump_1_status_description = random.choice(['High Pressure', 'Low Pressure', 'Inlet Fault', 'Communication Loss', 'Pump VFD Fault'])
        pump1alarmtimestamp.append(datetime.datetime.now())
        pump1alarmdescriptions.append(pump_1_status_description)
    elif pump_1_status_value == 1:
        pump_1_status_description = ''
    if pump_2_status_value == 0 and not pump_2_status_description:
        pump_2_status_description = random.choice(['High Pressure', 'Low Pressure',  'Inlet Fault', 'Communication Loss', 'Pump VFD Fault'])
        pump2alarmtimestamp.append(datetime.datetime.now())
        pump2alarmdescriptions.append(pump_2_status_description)
    elif pump_2_status_value == 1:
        pump_2_status_description = ''
    if pump_3_status_value == 0 and not pump_3_status_description:
        pump_3_status_description = random.choice(['High Pressure', 'Low Pressure',  'Inlet Fault', 'Communication Loss', 'Pump VFD Fault'])
        pump3alarmtimestamp.append(datetime.datetime.now())
    elif pump_3_status_value == 1:
        pump_3_status_description = ''
    if pump_4_status_value == 0 and not pump_4_status_description:
        pump_4_status_description = random.choice(['High Pressure', 'Low Pressure',  'Inlet Fault', 'Communication Loss', 'Pump VFD Fault'])
        pump4alarmtimestamp.append(datetime.datetime.now())
    elif pump_4_status_value == 1:
        pump_4_status_description = ''
    if pump_5_status_value == 0 and not pump_5_status_description:
        pump_5_status_description = random.choice(['High Pressure', 'Low Pressure',  'Inlet Fault', 'Communication Loss', 'Pump VFD Fault'])
        pump5alarmtimestamp.append(datetime.datetime.now())
    elif pump_5_status_value == 1:
        pump_5_status_description = ''
    return pump_1_status_description, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, pump_1_status_value, pump_2_status_description, pump_3_status_description, pump_4_status_description, pump_5_status_description, pump1alarmtimestamp, pump2alarmtimestamp, pump3alarmtimestamp, pump4alarmtimestamp, pump5alarmtimestamp

def read_alarm_tags_all_pumps(tag_names):
    try:
        # Simulate reading tag values
        tag_values = {tag: random.choice([0, 1]) for tag in tag_names}
        return tag_values
    except Exception as e:
        print(f"An error occurred: {e}")
        return None



import random
import time

def update_circle_color():
    circle_colors = {'pump1color': '', 'pump2color': '', 'pump3color': '', 'pump4color': '', 'pump5color': ''}  # Initialize colors
    pump_1_statuses_value = randomize_alarm_status()
    pump_1_status_value = pump_1_statuses_value[5]
    pump_1_status_description = pump_1_statuses_value[0]
    pump_2_status_value = pump_1_statuses_value[1]
    pump_3_status_value = pump_1_statuses_value[2]
    pump_4_status_value = pump_1_statuses_value[3]
    pump_5_status_value = pump_1_statuses_value[4]
    pump_2_status_description = pump_1_statuses_value[6]
    pump_3_status_description = pump_1_statuses_value[7]
    pump_4_status_description = pump_1_statuses_value[8]
    pump_5_status_description = pump_1_statuses_value[9]
    try:
        # Update circle colors based on simulated tag values
        if pump_1_status_value == 1:
            circle_colors['pump1color'] = 'green'              
        elif pump_1_status_value != 1:
            circle_colors['pump1color'] = 'red'
        if pump_2_status_value == 1:
            circle_colors['pump2color'] = 'green'
        elif pump_2_status_value == 0:
            circle_colors['pump2color'] = 'red'
        if pump_3_status_value == 1:
            circle_colors['pump3color'] = 'green'
        elif pump_3_status_value == 0:
            circle_colors['pump3color'] = 'red'
        if pump_4_status_value == 1:
            circle_colors['pump4color'] = 'green'
        elif pump_4_status_value == 0:
            circle_colors['pump4color'] = 'red'
        if pump_5_status_value == 1:
            circle_colors['pump5color'] = 'green'
        elif pump_5_status_value == 0:
            circle_colors['pump5color'] = 'red'
        time.sleep(1)
        print("Returning pump statuses")
        return circle_colors, pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value, pump_1_status_description, pump_2_status_description, pump_3_status_description, pump_4_status_description, pump_5_status_description

    except Exception as e:
        print(f"An error occurred: {e}")
        return None
    
def update_alarm_tags_all_pumps():
    pump1_alarm_tags = ['VPUMP_1_B10[2].{}'.format(i) for i in range(16)]
    pump2_alarm_tags = ['VPUMP_2_B10[2].{}'.format(i) for i in range(16)]
    pump3_alarm_tags = ['VPUMP_3_B10[2].{}'.format(i) for i in range(16)]
    pump4_alarm_tags = ['VPUMP_4_B10[2].{}'.format(i) for i in range(16)]
    pump5_alarm_tags = ['VPUMP_5_B10[2].{}'.format(i) for i in range(16)]
    
    # Simulate reading alarm tags for all pumps
    pump1_alarm_tag_list = read_alarm_tags_all_pumps(pump1_alarm_tags)
    pump2_alarm_tag_list = read_alarm_tags_all_pumps(pump2_alarm_tags)
    pump3_alarm_tag_list = read_alarm_tags_all_pumps(pump3_alarm_tags)
    pump4_alarm_tag_list = read_alarm_tags_all_pumps(pump4_alarm_tags)
    pump5_alarm_tag_list = read_alarm_tags_all_pumps(pump5_alarm_tags)

    # Simulate determining active alarms for each pump
    pump1_active_alarms = [tag for tag, value in pump1_alarm_tag_list.items() if value == 1]
    pump2_active_alarms = [tag for tag, value in pump2_alarm_tag_list.items() if value == 1]
    pump3_active_alarms = [tag for tag, value in pump3_alarm_tag_list.items() if value == 1]
    pump4_active_alarms = [tag for tag, value in pump4_alarm_tag_list.items() if value == 1]
    pump5_active_alarms = [tag for tag, value in pump5_alarm_tag_list.items() if value == 1]

    # Simulate determining alarm status for each pump

    circle_colors, pump_1_status_value, pump_2_status_value, pump_3_status_value, pump_4_status_value, pump_5_status_value = update_circle_color()
    pump1_alarm_status = pump_1_status_value
    pump2_alarm_status = pump_2_status_value
    pump3_alarm_status = pump_3_status_value
    pump4_alarm_status = pump_4_status_value
    pump5_alarm_status = pump_5_status_value

    # Construct pump master status dictionary
    pumpmasterstatus = {
        'pump1status': {'alarm_status': pump1_alarm_status, 'active_alarms': pump1_active_alarms},
        'pump2status': {'alarm_status': pump2_alarm_status, 'active_alarms': pump2_active_alarms},
        'pump3status': {'alarm_status': pump3_alarm_status, 'active_alarms': pump3_active_alarms},
        'pump4status': {'alarm_status': pump4_alarm_status, 'active_alarms': pump4_active_alarms},
        'pump5status': {'alarm_status': pump5_alarm_status, 'active_alarms': pump5_active_alarms}
    }
    
    return pumpmasterstatus

