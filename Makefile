run:
	meteor

mongo:
	meteor mongo

watch:
	sass --watch client/views/style.scss:client/views/style.min.css --style compressed
