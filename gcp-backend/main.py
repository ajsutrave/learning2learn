from flask import Flask, url_for
from flask import request, jsonify
app = Flask(__name__)

@app.route('/')
def api_root():
    print request.get_json()
    return jsonify({"test":"123"})

if __name__ == '__main__':
    app.run()