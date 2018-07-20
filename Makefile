# Import the environment variables
-include .env

LIBRARY_NAME=base

NODE_MODULES=./node_modules
SCRIPTS_PATH=./.tasks
CONFIG_PATH=./.config

WEBPACK=$(NODE_MODULES)/.bin/webpack
ESLINT=$(NODE_MODULES)/.bin/eslint
BROWSERSYNC=$(NODE_MODULES)/.bin/browser-sync
JSDOC=$(NODE_MODULES)/.bin/jsdoc

WEBPACK_CONFIG=$(CONFIG_PATH)/webpack.js
BROWSERSYNC_CONFIG=$(CONFIG_PATH)/browsersync.js
JSDOC_CONFIG=$(CONFIG_PATH)/jsdoc.json

SOURCE_PATH=./src
LIBRARY_PATH=./lib
DEV_PATH=./demo
DOCS_PATH=./docs

publish: jsdoc build publish-docs
	@ yarn publish --access public

build: test js js-minified

test:
	# check source with eslint
	@ $(ESLINT) $(SOURCE_PATH)

js:
	@ LIBRARY_NAME=$(LIBRARY_NAME) \
		LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details

js-minified:
	@ LIBRARY_NAME=$(LIBRARY_NAME) \
		LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details --env.mode=minified

publish-docs:
	@ ./publish-docs.sh

jsdoc:
	# generate js documentation
	@ $(JSDOC) -r \
		-R README.md \
		-c $(JSDOC_CONFIG) \
		-d $(DOCS_PATH) \
		$(SOURCE_PATH)

dev:
	@ $(SCRIPTS_PATH)/utils/parallel \
		"make dev-sync" \
		"make dev-js"

dev-sync:
	# starting browser sync server for demo
	@ DEV_PATH=$(DEV_PATH) \
		BROWSER=$(BROWSERSYNC_BROWSER) \
		PORT=$(BROWSERSYNC_PORT) \
		$(BROWSERSYNC) start \
		--config $(BROWSERSYNC_CONFIG)

dev-js:
	# watch demo js
	@ LIBRARY_NAME=$(LIBRARY_NAME) \
		LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		DEV_PATH=$(DEV_PATH) \
		DEV_JS_PATH=$(DEV_JS_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --watch --display-error-details --env.mode=dev
