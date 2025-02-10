# Guía de Despliegue en Kubernetes

Esta guía proporciona los pasos necesarios para desplegar el proyecto utilizando Kubernetes.

## Requisitos previos
Asegúrate de tener instalado y configurado Docker, Docker Hub y Minikube en tu sistema antes de proceder.

## Referencia de imagenes usadas
[unir-backend](https://hub.docker.com/repository/docker/blocnotas/contenedores-unir-backend)
[unir-frontend](https://hub.docker.com/repository/docker/blocnotas/contenedores-unir-frontend)

## Pasos para el despliegue

### 1. Publicar imágenes en Docker Hub
Primero, necesitas publicar las imágenes del backend y frontend en Docker Hub.
```bash
docker login 
docker push blocnotas/contenedores-unir-backend
docker push blocnotas/contenedores-unir-frontend
```

### 2. Iniciar Minikube
Inicia Minikube para crear un clúster local donde se desplegarán los servicios.
```bash
minikube start
```

### 3. Desplegar el Backend
Crea los deployments y services para el backend ejecutando el script proporcionado en la carpeta de Kubernetes.
```bash
./deploy-backend.sh
```

### 4. Obtener la IP del Backend
Consulta la dirección IP del servicio del backend para actualizar la configuración del frontend.
```bash
minikube service unir-backend --url --namespace unir-namespace
```

### 5. Actualizar y publicar la imagen del Frontend
Después de actualizar la IP del backend en el archivo `tasks.service`, construye y publica la nueva imagen del frontend.
```bash
docker build -t blocnotas/contenedores-unir-frontend .
docker push blocnotas/contenedores-unir-frontend
```

### 6. Desplegar el Frontend
Crea los deployments y services para el frontend ejecutando otro script en la carpeta de Kubernetes.
```bash
./deploy-frontend.sh
```

### 7. Obtener la IP del Frontend
Obtén la dirección IP del servicio del frontend para acceder a la aplicación desde el navegador.
```bash
minikube service unir-frontend --url --namespace unir-namespace
```

### 8. Verificar los Pods
Comprueba los pods que se han creado dentro del namespace especificado para asegurar que todos están funcionando correctamente.
```bash
kubectl get pods -n unir-namespace
```

### 9. Ver Logs de los Pods
Para diagnosticar problemas o verificar la actividad, puedes ver los logs de cualquier pod específico.
```bash
kubectl logs [nombre-del-pod] -n unir-namespace
```

### 10. Listar Servicios
Finalmente, lista todos los servicios activos dentro del namespace para verificar que todo está configurado correctamente.
```bash
kubectl get services -n unir-namespace
```

Sigue estos pasos para desplegar eficientemente el proyecto en un ambiente controlado usando Kubernetes.