from flask import render_template
from . import page_6_bp

@page_6_bp.route('/page_6')
def page_6():
    return render_template('page_6.html')