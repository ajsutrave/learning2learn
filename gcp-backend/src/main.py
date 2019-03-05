from flask import Flask, url_for
from flask import request, jsonify
from google.cloud import datastore

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
    for x in query.fetch(limit=1)]
  output = 'Last submission:\n{}'.format('\n'.join(results))
  print(output)
  return jsonify({"test":"123"})

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--debug', action='store_true')
  args = parser.parse_args()
  app.run(port=8080, debug=args.debug)
