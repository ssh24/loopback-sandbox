#!/bin/bash

docker pull postgres

docker rm -f postgres-c > /dev/null 2>&1

docker run --name postgres-c -e POSTGRES_PASSWORD=postgres -p 5433:5432 -d postgres
