#! /bin/sh

set -e

yarn --cwd ./web-app/ run build

docker stop ee-web && docker rm $(docker ps -a -q --filter "name=ee-web")
docker build -t eagleeye/web-app ./web-app
docker run -d --net eagle_eye_network -p 80:80 --name ee-web eagleeye/web-app