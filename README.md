## Guía de Pasos para Construir y Desplegar Aplicaciones en Contenedores con Kubernetes

### 1. **Selección del Aplicativo y la Base de Datos**

   - **Elegir un aplicativo**: Escoge una aplicación que no hayas usado antes en tus prácticas. Puede ser cualquier aplicación web desarrollada en el lenguaje de programación de tu preferencia.
   - **Seleccionar una base de datos**: Decide qué sistema de gestión de bases de datos utilizarás. Por ejemplo, MySQL, PostgreSQL, MongoDB, etc.

### 2. **Preparación del Entorno de Desarrollo**

   - **Instalar Docker**: Asegúrate de que Docker está instalado en tu máquina para construir y manejar contenedores.
   - **Instalar Kubernetes**: Configura un entorno local de Kubernetes usando Minikube o usa un clúster de Kubernetes ya existente.
   - **Instalar kubectl**: Herramienta de línea de comandos para interactuar con el clúster de Kubernetes.

### 3. **Creación de Dockerfiles**

   - **Aplicativo**:
     ```dockerfile
     FROM node:14
     WORKDIR /app
     COPY . .
     RUN npm install
     EXPOSE 3000
     CMD ["npm", "start"]
     ```
   - **Base de datos** (Si decides usar una imagen existente, este paso puede ser opcional):
     ```dockerfile
     FROM postgres:latest
     ENV POSTGRES_PASSWORD=mysecretpassword
     EXPOSE 5432
     ```

### 4. **Construcción y Publicación de Imágenes en Docker Hub**

   - **Construye las imágenes**:
     ```bash
     docker build -t miusuario/miapp:latest .
     docker build -t miusuario/midb:latest .
     ```
   - **Sube las imágenes a Docker Hub**:
     ```bash
     docker push miusuario/miapp:latest
     docker push miusuario/midb:latest
     ```

### 5. **Creación de Manifiestos de Kubernetes**

   - **Namespace**:
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: mi-namespace
     ```
   - **Deployment del Aplicativo**:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: miapp-deployment
       namespace: mi-namespace
     spec:
       replicas: 2
       selector:
         matchLabels:
           app: miapp
       template:
         metadata:
           labels:
             app: miapp
         spec:
           containers:
           - name: miapp
             image: miusuario/miapp:latest
             ports:
             - containerPort: 3000
     ```
   - **Servicio para Exponer la Aplicación**:
     ```yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: miapp-service
       namespace: mi-namespace
     spec:
       type: LoadBalancer
       ports:
       - port: 80
         targetPort: 3000
       selector:
         app: miapp
     ```

   - **Configuración de la Base de Datos y Secretos**:
     ```yaml
     apiVersion: v1
     kind: Secret
     metadata:
       name: db-secret
       namespace: mi-namespace
     type: Opaque
     data:
       password: bXlzZWNyZXRwYXNzd29yZA== # Base64 encoded
     ---
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: midb-deployment
       namespace: mi-namespace
     spec:
       selector:
         matchLabels:
           app: midb
       template:
         metadata:
           labels:
             app: midb
         spec:
           containers:
           - name: midb
             image: miusuario/midb:latest
             env:
             - name: POSTGRES_PASSWORD
               valueFrom:
                 secretKeyRef:
                   name: db-secret
                   key: password
     ```

### 6. **Despliegue en Kubernetes**

   - **Aplica los manifiestos**:
     ```bash
     kubectl apply -f namespace.yaml
     kubectl apply -f deployment-miapp.yaml
     kubectl apply -f service-miapp.yaml
     kubectl apply -f secret.yaml
     kubectl apply -f deployment-midb.yaml
     ```

### 7. **Verificación y Acceso al Aplicativo**

   - **Verifica los despliegues**:
     ```bash
     kubectl get all -n mi-namespace
     ```
   - **Accede al aplicativo**:
     - Obtén la dirección IP pública del servicio y accede mediante un navegador web.

### 8. **Documentación y Entrega**

   - **Prepara un informe PDF** detallando cada paso realizado, problemas enfrentados, y cómo los resolviste.
   - **Empaqueta los archivos YAML y el PDF en un archivo ZIP** para su entrega.

Siguiendo estos pasos, podrás completar la tarea de construcción y despliegue de una aplicación en un clúster de Kubernetes de manera efectiva.