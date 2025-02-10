#!/bin/bash

kubectl delete -f backend-service.yml
kubectl delete -f backend-deployment.yml
