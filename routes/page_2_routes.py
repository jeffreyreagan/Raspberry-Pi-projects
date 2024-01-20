from flask import render_template
from . import page_2_bp

@page_2_bp.route('/page_2')
def page_2():
    # Your existing page 2 route code
    return render_template('page_2.html')