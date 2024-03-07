from flask import Blueprint

main_bp = Blueprint('main_routes', __name__)
page_2_bp = Blueprint('page_2_routes', __name__)
page_3_bp = Blueprint('page_3_routes', __name__)
data_bp = Blueprint('data', __name__)
from routes.main_routes import *
from routes.page_2_routes import *
from routes.page_3_routes import *