#!/bin/bash

sudo docker stop mongo-db spirit-library tunnel-vision
sudo docker compose -f docker-compose.prod.yml up -d
