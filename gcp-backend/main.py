from flask import Flask, url_for
from flask import request, jsonify
from google.cloud import datastore
try:
  import googleclouddebugger
  googleclouddebugger.enable()
except ImportError:
  pass
import argparse
app = Flask(__name__)

@app.route('/api', methods=['POST'])
def api_root():
    ds = datastore.Client()
    entity = datastore.Entity(key=ds.key('submission'))
    entity.update(request.form)
    ds.put(entity)

    query = ds.query(kind='submission', order=('-timestamp',))
    results = [
        'Time: {timestamp} Code: {code}'.format(**x)
        for x in query.fetch(limit=10)]
    output = 'Last 10 submissions:\n{}'.format('\n'.join(results))
    print(output)
    return jsonify({"test":"123"})

if __name__ == '__main__':
    app.run(port=8080, debug=True)
