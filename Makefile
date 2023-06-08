TEMPLATE ?= svelte-sample-app
NAME ?= blank-component
APP ?= svelte-sample-app

create-lib-component:
	@bash .violet/scripts/library.sh create-new-component ${NAME}

create-sample-component:
	@bash .violet/scripts/library.sh add-sample-component ${APP}

create-app:
	@bash .violet/scripts/main.sh create-usecase ${TEMPLATE}

run-svelte-app:
	@bash makefile.sh run-svelte-app ${APP}

clean-svelte-app:
	@bash makefile.sh clean-svelte-app ${APP}

run-storybook:
	@bash makefile.sh run-storybook

install:
	@bash makefile.sh npm-install $(APP)

build:
	@bash makefile.sh npm-build $(APP)

run-dev:
	@bash makefile.sh npm-dev $(APP)

run-prod:
	@bash makefile.sh npm-start $(APP)

run-docker:
	@bash makefile.sh docker-image $(APP)
	@bash makefile.sh docker-run $(APP)

stop-docker:
	docker container stop $(APP)
