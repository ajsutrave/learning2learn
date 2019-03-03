GOOGLE_APPLICATION_CREDENTIALS := $(shell find . -name 'learning2learn-gcp-backend-*.json')

init:
	python3 -m venv .gcp-backend-venv
	pip install --upgrade pip
	pip install --user -r requirements.txt
clean:
	rm -rf .gcp-backend-venv data
deploy:
	gcloud app deploy app.yaml
	gcloud app deploy data/index.yaml
test:
	gcloud beta emulators datastore start --data-dir data --no-store-on-disk &
	@sleep 2
	gcloud beta emulators datastore env-init --data-dir data
	export GOOGLE_APPLICATION_CREDENTIALS=$(GOOGLE_APPLICATION_CREDENTIALS)
	python3 main.py
