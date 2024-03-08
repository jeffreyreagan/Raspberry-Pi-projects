'''This program is meant for educational purposes. Do not use for other purposes. No Warranty of Any Kind. Thanks JR'''

#imports 
from flask import Flask, render_template, send_file, request, jsonify
from routes import *
from utils.image_generator import get_random_image_io
import subprocess
import datetime
import platform


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

#home or index
@app.route('/')

#determine OS and gather temp data
    
#assemble index
@app.route('/index.html')
def index():
    print("Accessing index route.")
    # Get visitor's IP address

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


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True)


'''  
git config --global user.email "you@example.com"
git config --global user.name "Your Name

"'''