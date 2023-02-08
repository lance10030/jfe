.PHONY: all build run gotool clean help

export BINARY=jaz-home-fe
export SERVER_IMAGE=${DOCKER_HUB}/${BINARY}
export ROOT_PATH ?= ${PWD}

build-image:
	docker build --progress=plain --build-arg  BUILD_IMAGE="${branch}" -t ${SERVER_IMAGE}:${VERSION} .

push-image:
	docker push ${SERVER_IMAGE}:${VERSION}
clean-image:
	docker rmi ${SERVER_IMAGE}:${VERSION}
