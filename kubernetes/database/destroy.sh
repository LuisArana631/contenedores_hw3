#!/bin/bash

kubectl delete -f mongo-express.yml
kubectl delete -f mongo.yml
kubectl delete -f mongo-secret.yml
kubectl delete -f namespace.yml
