GOOGLE_APPLICATION_CREDENTIALS := $(shell find . -name 'learning2learn-gcp-backend-*.json')

init:
	python3 -m venv .gcp-backend-venv
	pip install -r src/requirements.txt
clean:
	rm -rf .gcp-backend-venv data
deploy:
	gcloud app deploy src/app.yaml
	gcloud app deploy data/index.yaml
test:
	gcloud beta emulators datastore start --data-dir data --no-store-on-disk &
	@sleep 2
	gcloud beta emulators datastore env-init --data-dir data
	export GOOGLE_APPLICATION_CREDENTIALS=$(GOOGLE_APPLICATION_CREDENTIALS)
	python3 main.py --debug
	# .gcp-backend-venv/bin/python3 main.py --debug
	@sleep 2
	chromium-browser  --disable-extensions --load-extension=../../../chrome-plugin/src/ https://repl.it/student/submissions/4881118
