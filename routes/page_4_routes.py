from flask import render_template
from . import page_4_bp

@page_4_bp.route('/page_4')
def page_4():
    return render_template('page_4.html')