from flask import Blueprint

main_bp = Blueprint('main_routes', __name__)
page_2_bp = Blueprint('page_2_routes', __name__)
page_3_bp = Blueprint('page_3_routes', __name__)
codeacademy_projects_bp = Blueprint('codeacademy_projects_routes', __name__)    
NYCFashionWeek_bp = Blueprint('NYCFashionWeek_routes', __name__)   
table_bp = Blueprint('table_routes', __name__)

from routes.main_routes import *
from routes.page_2_routes import *
from routes.page_3_routes import *
from routes.codeacademy_projects_routes import *
from routes.NYCFashionWeek_routes import *
