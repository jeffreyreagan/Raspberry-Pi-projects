from flask import render_template
from . import codeacademy_projects_bp

@codeacademy_projects_bp.route('/codeacademy_projects')
def codeacademy_projects():
    # Your existing page 2 route code
    return render_template('codeacademy_projects.html')