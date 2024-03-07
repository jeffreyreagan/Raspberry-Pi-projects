from flask import render_template
from . import table_bp

@table_bp.route('/table')
def table():
    # Your existing page 2 route code
    return render_template('table.html')

