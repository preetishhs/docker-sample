# Sample applications for Docker Demo

Sample application created using Nodejs and express. It Can be used for building docker containers and linking them

### Steps to follow

1. Create an ubuntu 16.0.4 64bit EC2 instance and connect to the instance using any SSH clients (Eg. Git Bash)
2. Pull the following sample code from git repository by running `git clone https://github.com/preetishhs/docker-sample.git`
3. Navigate to the directory by running `cd docker-sample`
4. Give permissions to the `install.sh` file by running `chmod 777 install.sh`
5. Run the script file `sudo ./install.sh` which installs nodejs version 8, docker and docker-compose
6. Run `npm install` to install all the dependencies in all folders
