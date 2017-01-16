jsdoc:
	# generate js documentation
	@ jsdoc -r \
		-c jsdoc.json \
		-d docs \
		-R README.md \
		src
