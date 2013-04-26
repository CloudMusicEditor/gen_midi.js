all:
	java -jar support/closure-compiler/compiler.jar --js src/* --js_output_file build.js
