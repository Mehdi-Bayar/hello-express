# hello-express
Hello world for node + express

## Running the application on local

### Install the dependencies
```npm install```

### Start the application
```npm start```

### Test the application
```curl -i localhost:8080```

## Dockerization of the hello world express app

### Creating an docker image for the application
```docker build . -t bayar/hello-express```

### Running the docker image
```docker run -p 49160:8080 -d bayar/hello-express```

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
 
