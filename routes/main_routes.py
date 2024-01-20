from flask import render_template, request
from . import main_bp

@main_bp.route('/')
def index():
    print('this is the route')
    visitor_ip = request.remote_addr
    print(f"Visitor's IP address: {visitor_ip}")
    # Your existing index route code
    return render_template('index.html', visitor_ip=visitor_ip)