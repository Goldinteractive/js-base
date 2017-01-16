js:
	@ BASE=. \
		IN=main.js \
		OUT=build/bundle.js \
		../node_modules/.bin/webpack \
		--config build/webpack.js \
		--display-error-details

watch-js:
	@ DEBUG=true WATCH=true $(MAKE) js
