NODE_MODULES=./node_modules
CONFIG_PATH=./.config

WEBPACK=$(NODE_MODULES)/.bin/webpack
JSDOC=$(NODE_MODULES)/.bin/jsdoc

WEBPACK_CONFIG=$(CONFIG_PATH)/webpack.js
JSDOC_CONFIG=$(CONFIG_PATH)/jsdoc.json

SOURCE_PATH=./src
LIBRARY_PATH=./lib
DOCS_PATH=./docs

.PHONY: publish
publish: docs build publish-docs
	@ yarn publish --access public

.PHONY: build
build: test js js-minified

.PHONY: test
test:
	@ yarn test

.PHONY: js
js:
	@ LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details

.PHONY: js-minified
js-minified:
	@ LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details --env.mode=production

.PHONY: publish-docs
publish-docs:
	@ ./publish-docs.sh

.PHONY: docs
docs:
	# generate js documentation
	@ $(JSDOC) -r \
		-R README.md \
		-c $(JSDOC_CONFIG) \
		-d $(DOCS_PATH) \
		$(SOURCE_PATH)
