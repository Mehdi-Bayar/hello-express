# hello-express
Hello world for node + express

## Dockerization of the hello world express app

### Creating an docker image for the application
```docker build . -t bayar/hello-express```

### Running the docker image
```docker run -p 49160:8080 -d bayar/hello-express```

### Testing the docker image
```curl -i localhost:49160```