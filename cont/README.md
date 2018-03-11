### Build Docker image

```
docker build -t cont .
```


### Run Docker container

```
docker run -p 8082:8081 cont
```

## Clean up

### Get container id

Docker ps command to list the running containers

```
docker ps
```
### Stop Container

```
docker stop container-id //(42ba83425487)
```
### Remove container

```
docker rm container-id  //(42ba83425487)
```
### Remove image

```
docker rmi cont
```
