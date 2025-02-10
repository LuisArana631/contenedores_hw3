#!/bin/bash

kubectl apply -f namespace.yml
kubectl apply -f mongo-secret.yml
kubectl apply -f mongo.yml
kubectl apply -f mongo-express.yml
