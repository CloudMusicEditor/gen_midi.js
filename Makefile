all:
	java -jar support/closure-compiler/compiler.jar --js src/* --js_output_file dist/jsmidgen.js

test: all
