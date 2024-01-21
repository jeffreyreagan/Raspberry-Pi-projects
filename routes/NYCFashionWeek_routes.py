from flask import render_template
from . import NYCFashionWeek_bp

@NYCFashionWeek_bp.route('/NYCFashionWeek')
def NYCFashionWeek():
    # Your existing page 2 route code
    return render_template('NYCFashionWeek.html')




