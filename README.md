# AWS SAM Typescript Webpack Boilerplate
VS Code, AWS toolkit and SAM template is a great way to develop AWS lambda functions. But unfortunately AWS tookit does not support Typescript yet. This boilerplate let you create AWS lambda using Typescript with Debug Support.

# How to Run:
1. Download VS Code https://code.visualstudio.com/download
2. Clone this repository
3. run **NPM install**
4. Install the AWS CLI https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html
5. Install Docker.https://docs.docker.com/docker-for-windows/install/
6.  Install the AWS SAM CLI https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html
7. Open command promit from **aws-sam-typescript-webpack-boilerplate** directory 
8. run **npm run-script watch**
9. Open another command promit and run **sam local invoke HelloWoldFunc -e src/helloWorld/event.json**
10. Enjoy!!

# How to Debug :
1. Open this project at VS Code
2. Set a **Breakpoint** where you want.
3. run **npm run-script watch**
4. run **sam local invoke HelloWoldFunc -e src/helloWorld/event.json -d 5858**
5. hit **Debug on VS Code or Press F5**
6. Wow breakpoint hited!!

# Available Commands:
1. npm run-script test
2. npm run-script watch
3. npm run-script build
