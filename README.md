### In order to build container run:
```
    docker build -t nodeapp .
```
### In order to build instances run:
```
    docker-compose up
```
### Check req
```
    autocannon c100 -d 5 -p 10 http://localhost:8080
```