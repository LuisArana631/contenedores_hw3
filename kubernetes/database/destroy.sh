#!/bin/bash

kubectl delete -f mongo-express-service.yml
kubectl delete -f mongo-express-deployment.yml
kubectl delete -f mongo-service.yml
kubectl delete -f mongo-deployment.yml
kubectl delete -f mongo-secret.yml
kubectl delete -f namespace.yml
