# hello-express
Hello world for node + express

You can run this application on local or inside docker or in kubernetes

## For local

### Install the dependencies
```npm install```

### Start the application
```npm start```

### Test the application
```curl -i localhost:8080```

## For Docker

### Create a docker image for the application
```docker build . -t bayar/hello-express```

### Run the docker image
```docker run -p 49160:8080 -d bayar/hello-express```

### Test the docker image
```curl -i localhost:49160```

## For Kubernetes

### Creating the namspace (hello-express) that we will use for this application 

```kubectl apply -f kubernetes/01-hello-express-ns.yaml```

### Next apply the full kubernetes remaining configuration 
```kubectl apply -f kubernetes```

### Switch to the hello-express namespace (optional)
```kubectl config set-context --current --namespace=hello-express```

### Test the application
The kubernetes configuration creates a LoadBalancer service . we will need to get the IP address assigned to it using the command:

```kubectl get services --namespace=hello-express```

This should display something like

|NAME|                TYPE|           CLUSTER-IP|       EXTERNAL-IP|    PORT(S)|          AGE|
| -- |------------------- | ------------------- | ---------------- | --------- | ----------- |
|hello-express-svc|   LoadBalancer|   10.152.183.150|   192.168.0.63|   8080:30123/TCP|   11m|

Retrieve the external-ip address and open it with your browser or using the curl command

```curl -i 192.168.0.63:8080```
 
