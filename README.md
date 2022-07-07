# student_management_system

## Description
A fully functional **student management system with basic CRUD operations** using **ReactJS, Springboot and MongoDB**. The system has been unit tested with proper error handling.

## Key Features
- Admin logs in to the login page where admin email and password are required for succesful login. 
- If the admin is new the user can login by registering.
- Admins will be able to access the main dashboard under their domain and their user specific functionalities.
- After admins log in to the system they are provided the option to add new students to the system.
- Student details are displayed in the "view students" page and admins can manipulate all the data within the system boundary.
- Student details can be removed within the system by the delete function. Once a student is deleted from the system they are revoked access to it.
- When an admin creates the student accounts they recieve a confirmation mail to their email.

## Project motivation
As someone who is very enthusiastic about learning new technologies, using MongoDB was initially a challenge as I have never used it before. However I was able to make it a learning opportunity with the motivation of learning a new skill!

## Code Style 
Code style - **standard**

## Framework used
- ReactJS
- Spring boot
- MongoDB

## Installation
### Prerequisites
-	Install the most recent version of Windows 10 (Build 18362 or above) or Windows 11 (Version 1903 or higher).
-	Install the Windows Subsystem for Linux (WSL), which should also include a Linux distribution (such as Ubuntu), and check to see that it is operating in WSL 2 mode. You are able to confirm this by launching PowerShell and typing in the following: wsl -l -v.
-	Install Node.js on WSL 2: These instructions use Node Version Manager, often known as nvm, for the installation process. In order to execute create-react-app, you will need a current version of NodeJS, as well as a recent version of Node Package Manager (npm).
Run React Front-End
-	Open a terminal (Windows Command Prompt or PowerShell).
-	Move into project folder using the cd command
- Install/Update node module 
-	Start the application using npm start command 
### Run Spring Boot Backend
-	First install the maven to environment variable
-	Setup the connection with the mongo db database 
-	Run the mvn spring-boot:run command 
### Run Database Layer
-	In order to install the MongoDB Windows service, use the following command while logged in as an administrator into the Command Prompt.
- “C:MongoDB\bin\mongod.exe” — config “C:\MongoDB\mongod.cfg” — install
- You may use the following command to start the MongoDB service on Windows.
- Net start MongoDB
- Import all the data to the database 


## Credits
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.7.1/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.7.1/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.7.1/reference/htmlsingle/#web)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/docs/2.7.1/reference/htmlsingle/#data.nosql.mongodb)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.7.1/reference/htmlsingle/#using.devtools)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
