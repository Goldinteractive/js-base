NODE_MODULES=./node_modules
SCRIPTS_PATH=./.tasks
CONFIG_PATH=./.config

WEBPACK=$(NODE_MODULES)/.bin/webpack
ESLINT=$(NODE_MODULES)/.bin/eslint
JSDOC=$(NODE_MODULES)/.bin/jsdoc

WEBPACK_CONFIG=$(CONFIG_PATH)/webpack.js
JSDOC_CONFIG=$(CONFIG_PATH)/jsdoc.json

SOURCE_PATH=./src
LIBRARY_PATH=./lib
DOCS_PATH=./docs

publish: jsdoc build publish-docs
	@ yarn publish --access public

build: test js js-minified

test:
	# check source with eslint
	@ $(ESLINT) $(SOURCE_PATH)

js:
	@ LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details

js-minified:
	@ LIBRARY_PATH=$(LIBRARY_PATH) \
		SOURCE_PATH=$(SOURCE_PATH) \
		$(WEBPACK) --config $(WEBPACK_CONFIG) \
		--progress --colors --display-error-details --env.mode=production

publish-docs:
	@ ./publish-docs.sh

docs:
	# generate js documentation
	@ $(JSDOC) -r \
		-R README.md \
		-c $(JSDOC_CONFIG) \
		-d $(DOCS_PATH) \
		$(SOURCE_PATH)
