#!/bin/bash

kubectl apply -f namespace.yml
kubectl apply -f mongo-secret.yml
kubectl apply -f mongo-deployment.yml
kubectl apply -f mongo-service.yml
kubectl apply -f mongo-express-deployment.yml
kubectl apply -f mongo-express-service.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
