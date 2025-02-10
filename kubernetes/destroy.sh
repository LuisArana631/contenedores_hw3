#!/bin/bash

kubectl delete -f frontend-service.yml
kubectl delete -f frontend-deployment.yml
kubectl delete -f backend-service.yml
kubectl delete -f backend-deployment.yml
kubectl delete -f mongo-express-service.yml
kubectl delete -f mongo-express-deployment.yml
kubectl delete -f mongo-service.yml
kubectl delete -f mongo-deployment.yml
kubectl delete -f namespace.yml
