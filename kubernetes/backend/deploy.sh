#!/bin/bash

kubectl apply -f backend-secret.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
