from flask import Flask
from flask_restful import Api
from resources.my_resource import MyResource

app = Flask(__name__)
api = Api(app)

# Add your endpoints
api.add_resource(MyResource, '/api/my-resource')

if __name__ == '__main__':
    app.run(debug=True)