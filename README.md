
# EagleEye - URL Monitoring Service


### Setting up the Service
```
# Create a new bridge network
docker network create eagle_eye_network

# Get the images
docker pull mongo:latest
docker build -t eagleeye/web-app ./web-app
docker build -t eagleeye/api-server ./api-server


# Run the containers
docker run -d --net eagle_eye_network -p 3000:3000 --name ee-api eagleeye/api-server
docker run -d --net eagle_eye_network -p 80:80 --name ee-web eagleeye/web-app

```

**Note:** The API Server should be started before starting the web app

### Endpoints

- http://localhost/   -   Web App Endpoint
- http://localhost/api  -  API Endpoint
