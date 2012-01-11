test:
	./node_modules/.bin/mocha --reporter list

build:
	./node_modules/.bin/uglifyjs redblack.js > redblack.min.js

.PHONY: test build