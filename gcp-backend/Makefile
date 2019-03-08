GOOGLE_APPLICATION_CREDENTIALS := $(shell find src/ -name 'learning2learn-gcp-backend-*.json')
ifeq ($(OS),Windows_NT)
	PYTHON3 := py -3
	EXCUTABLES := Scripts
else
	PYTHON3 := python3
	EXCUTABLES := bin
endif

init:
	$(PYTHON3) -m venv .gcp-backend-venv
	.gcp-backend-venv/$(EXCUTABLES)/pip install --upgrade pip
	.gcp-backend-venv/$(EXCUTABLES)/pip install -r src/requirements.txt

clean:
	-rm -rf .gcp-backend-venv data
deploy:
	gcloud app deploy src/app.yaml
	gcloud app deploy data/index.yaml
test:
	gcloud beta emulators datastore start --data-dir data --no-store-on-disk &
	@sleep 5
	gcloud beta emulators datastore env-init --data-dir data
	export GOOGLE_APPLICATION_CREDENTIALS=$(GOOGLE_APPLICATION_CREDENTIALS)
	source .gcp-backend-venv/bin/activate; \
	.gcp-backend-venv/$(EXCUTABLES)/python src/main.py --debug &
	@sleep 2
	chromium-browser  --disable-extensions --load-extension=../../../chrome-plugin/src/ https://repl.it/student/submissions/4881118
	@sleep 10
