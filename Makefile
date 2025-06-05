# Variables
APP_NAME = ecovibe-app
VERSION_FILE = version.txt
DOCKER_REGISTRY = ghcr.io
GITHUB_USERNAME = isamejia12
REPOSITORY = $(DOCKER_REGISTRY)/$(GITHUB_USERNAME)/$(APP_NAME)

# Obtener la versión actual del archivo version.txt o crear si no existe
VERSION ?= $(shell cat $(VERSION_FILE) 2>/dev/null || echo "1.0.0")
MAJOR := $(word 1,$(subst ., ,$(VERSION)))
MINOR := $(word 2,$(subst ., ,$(VERSION)))
FIX := $(word 3,$(subst ., ,$(VERSION)))

.PHONY: help version-major version-minor version-fix build push deploy check-auth

help: ## Muestra la ayuda
	@echo "Comandos disponibles:"
	@echo "make version-major  - Incrementa la versión mayor (X.0.0)"
	@echo "make version-minor  - Incrementa la versión menor (0.X.0)"
	@echo "make version-fix    - Incrementa la versión fix (0.0.X)"
	@echo "make build         - Construye la imagen Docker"
	@echo "make push          - Sube la imagen a GitHub Container Registry"
	@echo "make deploy        - Construye, etiqueta y sube la imagen"
	@echo "make clean         - Limpia imágenes y contenedores antiguos"
	@echo "make check-auth    - Verifica la autenticación con GHCR"
	@echo ""
	@echo "Repositorio actual: $(REPOSITORY)"
	@echo "Versión actual: $(VERSION)"

check-auth: ## Verifica la autenticación con GHCR
	@echo "Verificando autenticación con $(DOCKER_REGISTRY)..."
	@docker login $(DOCKER_REGISTRY) -u $(GITHUB_USERNAME) > /dev/null 2>&1 || \
	(echo "Error: No autenticado en $(DOCKER_REGISTRY). Por favor, sigue estos pasos:"; \
	 echo "1. Crea un nuevo Personal Access Token en GitHub"; \
	 echo "2. Exporta el token: export CR_PAT=tu_token"; \
	 echo "3. Inicia sesión: echo \$$CR_PAT | docker login ghcr.io -u $(GITHUB_USERNAME) --password-stdin"; \
	 exit 1)
	@echo "✓ Autenticación correcta con $(DOCKER_REGISTRY)"

version-major: ## Incrementa la versión mayor
	@echo "$(shell echo $$(($(MAJOR)+1))).0.0" > $(VERSION_FILE)
	@echo "Nueva versión: `cat $(VERSION_FILE)`"

version-minor: ## Incrementa la versión menor
	@echo "$(MAJOR).$(shell echo $$(($(MINOR)+1))).0" > $(VERSION_FILE)
	@echo "Nueva versión: `cat $(VERSION_FILE)`"

version-fix: ## Incrementa la versión fix
	@echo "$(MAJOR).$(MINOR).$(shell echo $$(($(FIX)+1)))" > $(VERSION_FILE)
	@echo "Nueva versión: `cat $(VERSION_FILE)`"

build: ## Construye la imagen Docker
	@echo "Construyendo $(REPOSITORY):$(VERSION)"
	docker build -t $(REPOSITORY):$(VERSION) .
	docker tag $(REPOSITORY):$(VERSION) $(REPOSITORY):latest

push: ## Sube la imagen a GitHub Container Registry
	@echo "Subiendo $(REPOSITORY):$(VERSION) a GitHub Container Registry"
	docker push $(REPOSITORY):$(VERSION)
	docker push $(REPOSITORY):latest

deploy: ## Construye y sube la imagen
	@echo "=== Iniciando despliegue ==="
	@echo "Repositorio: $(REPOSITORY)"
	@echo "Versión: $(VERSION)"
	@$(MAKE) build
	@$(MAKE) push
	@echo "=== Despliegue completado ==="

fix-deploy: ## Construye y sube la imagen
	@echo "=== Iniciando despliegue ==="
	@echo "Repositorio: $(REPOSITORY)"
	@$(MAKE) version-fix
	@$(MAKE) build
	@$(MAKE) push
	@echo "=== Despliegue completado ==="

clean: ## Limpia imágenes y contenedores antiguos
	@echo "Limpiando imágenes y contenedores antiguos..."
	docker container prune -f
	docker image prune -f
	docker images -q $(REPOSITORY) | xargs -r docker rmi -f 