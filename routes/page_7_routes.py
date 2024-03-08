from flask import render_template
from . import page_7_bp

@page_7_bp.route('/page_7')
def page_7():
    return render_template('page_7.html')