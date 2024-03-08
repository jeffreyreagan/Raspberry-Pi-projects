from flask import render_template
from . import page_5_bp

@page_5_bp.route('/page_5')
def page_5():
    return render_template('page_5.html')