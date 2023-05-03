# How to build and deploy new image #

## Follow these steps: ##

1. Open a terminal in the root folder of the project

2. Login to docker hub with ``` docker login ``` (credentials are in backend repo docs)

3. Build the new docker image ``` docker build . -t tesiimages/tesi:frontend-react-dev-beta ```
 
4. Push the built image to docker-hub with ``` docker push tesiimages/tesi:frontend-react-dev-beta ``` 
