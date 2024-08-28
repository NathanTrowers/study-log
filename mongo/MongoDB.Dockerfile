# syntax=docker/dockerfile:1

FROM mongo:5.0

COPY ./ ./docker-entrypoint-initdb.d/
