### Documentation
+ Docker root folder : /var/lib/docker 
+ nginx root folder: /usr/share/nginx/html 
+ docker ps -a : Displays all containers
+ docker images: Displays images
+ docker rm/stop -f <container-name>: Kills running docker
+ docker exec -ti my_new_container sh : Get into container shell on mac env
+ docker run -it -v /home/docker/osx/somefolder:/opt/somefolder ubuntu bash :share folder between host and container
+ docker pull imagename: latest: install image
+ docker rm/kill container/ID : removes contaier
+ docker run -it -v /home/dniyo/hostfolder:/container folder alpine/ubuntu: shares folder between systems
+ docker build -t image;version -t image: latest
+ docker ex -it imaga/ID bin/bash: gets you into container shell on ubuntu
+++