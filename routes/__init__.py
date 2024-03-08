from flask import Blueprint

main_bp = Blueprint('main_routes', __name__)
page_2_bp = Blueprint('page_2_routes', __name__)
page_3_bp = Blueprint('page_3_routes', __name__)
page_4_bp = Blueprint('page_4_routes', __name__)
page_5_bp = Blueprint('page_5_routes', __name__)
page_6_bp = Blueprint('page_6_routes', __name__)
page_7_bp = Blueprint('page_7_routes', __name__)
data_bp = Blueprint('data', __name__)
from routes.main_routes import *
from routes.page_2_routes import *
from routes.page_3_routes import *
