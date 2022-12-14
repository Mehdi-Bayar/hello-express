# hello-express
Hello world for node + express

Also checkout the other branches. There's some small example applications that connects to the database

## Dockerization of the hello world express app

### Creating an docker image for the application
```docker build . -t bayar/hello-express```

### Running the docker image
### Running the image with the default configuration
```docker run -p 49160:8080 -d bayar/hello-express```

#### If you like to add environment variable . you can update the .env file and your run the docker image with
```docker run -p 49160:8080 --env-file .env -d bayar/hello-express```

### Testing the docker image
```curl -i localhost:49160```

## Kubernetes

### Applying the kubernetes config
Creating the kubernetes namspace (hello-express) that we will use for our application 

```kubectl apply -f kubernetes/01-hello-express-ns.yaml```

Next apply the full kubernetes remaining configuration 
```kubectl apply -f kubernetes```

### Switching to the hello-express namespace (optional)
```kubectl config set-context --current --namespace=hello-express```

### Testing the application running on kubernetes
The kubernetes configuration creates a LoadBalancer service . we will need to get the IP address assigned to it using the command:

```kubectl get services --namespace=hello-express```

This should display something like

|NAME|                TYPE|           CLUSTER-IP|       EXTERNAL-IP|    PORT(S)|          AGE|
| -- |------------------- | ------------------- | ---------------- | --------- | ----------- |
|hello-express-svc|   LoadBalancer|   10.152.183.150|   192.168.0.63|   8080:30123/TCP|   11m|

Retrieve the external-ip address then you can test the app using the curl command or using your browser. Example

```curl -i 192.168.0.63:8080```
 

## Running the application in local
### Copy and update the .env file as needed
```cp .env.dist .env```

### Run the node application
```npm start```

### Test the application
```curl -i 0.0.0.0:8080```