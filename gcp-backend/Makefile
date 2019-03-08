GOOGLE_APPLICATION_CREDENTIALS := $(shell find src/ -name 'learning2learn-gcp-backend-*.json')
ifeq ($(OS),Windows_NT)
	PYTHON3 := py -3
else
	PYTHON3 := python3
endif

init:
	$(PYTHON3) -m venv .gcp-backend-venv
	$(PYTHON3) -m pip install --user -r src/requirements.txt
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
	$(PYTHON3) src/main.py --debug &
	# .gcp-backend-venv/bin/$(PYTHON3) main.py --debug &
	@sleep 2
	chromium-browser  --disable-extensions --load-extension=../../../chrome-plugin/src/ https://repl.it/student/submissions/4881118
