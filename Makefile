BIN=node_modules/.bin

test:
	make lint
	doxdox index.js --layout markdown | diff DOCUMENTATION.md -

lint:
	$(BIN)/eslint index.js

docs:
	doxdox index.js --layout markdown --output DOCUMENTATION.md
