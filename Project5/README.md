## FINAL PROJECT
### Overview
Part I of this project focuses on showing off basic skills to get started with dockers. I will be using dockerfile commands to create and run an image. inside Project 5 folder, you find website subdirectory which contains my website files. In this documentation, I will go over couple steps you need to take to run a website as container.

+ **How to install docker + dependencies**
       
       
In order to build and run docker you must download a docker desktop software as a prerequisite. If you go to this website, you can download executable file depending on your system https://docs.docker.com/get-docker/

+ **How to build a container**
       

 This really depends on whether you are using dockerfile or command line to build your contanier. I used the earlier to complete this task. All I had to do was to chose the base image and version first in my FROM command, saved this file and run the following command to build it: 
   
            docker build -t my_apache2_image . 

+ **How to run the container**
  To run a container, you need to check if your image has installed by running docker images command, after confirming I ran this command to run my container and the same time binding the port:
      
      docker run -dit --name my_apache2_container -p 8080:80 my_apache2_image

+ How to view the project running in the container
  To view the website running in container, I just opened a new tab, and type localhost:8086 or private ip:8086

     NOTE: Make sure your dockerfile specifies the source and destination of your web content. Using COPY command, **/usr/local/apache2/htdocs/** should be the root directory where you need to store your website files.


  ![](/Project5/images/Untitled.png)
