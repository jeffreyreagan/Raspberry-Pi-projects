from flask import render_template
from . import page_3_bp

@page_3_bp.route('/page_3')
def page_3():
    # Your existing page 2 route code
    return render_template('page_3.html')