'''This program is meant for educational purposes. Do not use for other purposes. No Warranty of Any Kind. Thanks JR'''

#imports 
from flask import Flask, render_template, send_file, request
from routes import *
from utils.image_generator import get_random_image_io
import subprocess
import datetime
import platform

#setup
app = Flask(__name__)

app.register_blueprint(main_bp)
app.register_blueprint(page_2_bp)
app.register_blueprint(page_3_bp)
app.register_blueprint(codeacademy_projects_bp)
app.register_blueprint(NYCFashionWeek_bp)
print("WEBSERVER starting Jeff")

#home or index
@app.route('/')

#determine OS and gather temp data
def get_internal_temperature():
    if platform.system() == 'Windows':
        return 0.0
    else:
        result = subprocess.run(['vcgencmd', 'measure_temp'], capture_output=True, text=True)
        temperature_str = result.stdout.strip().replace('temp=', '').replace('\'C', '')
        return float(temperature_str)
    
#assemble index
def index():
    print("Accessing index route.")
    # Get current time
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # Get internal temperature
    temperature = get_internal_temperature()
    # Get visitor's IP address

    # Render HTML template with time and temperature
    return render_template('index.html', time=current_time, temperature=temperature,)

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

#codeacedemy projects
@app.route('/codeacademy_projects.html')
def codeacademy_projects_bp():    
    return render_template('codeacademy_projects.html')

@app.route('/NYCFashionWeek.html')
def NYCFashionWeek_bp():
    return render_template('NYCFashionWeek.html')

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True)


'''  
git config --global user.email "you@example.com"
git config --global user.name "Your Name

"'''