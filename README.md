# Social-Network-API

## Description

A short description explaining the what, why, and how of project "Social Network API":

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Used Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

A walkthrough video that demonstrates its functionality is included with a link to the video of the project. 

## User Story

AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

Pulling the GitHub repository from the follwing URL: https://github.com/RamRod79/Social-Network-API.git and typing the follwoing command ,'npm install', in the terminal will ensure the dependencies are installed and the program can run properly.

- Download and run mysql server.

- Download the repository to your own local machine and run it from your command line.

- Run ```npm i``` or ```npm install``` in order to download all the dependencies.

- MySQL instructions to create your tables:

        - Enter ```mysql -u root -p``` in the terminal window.
        - Enter your mysql password. 
        - Create database by entering ```CREATE DATABASE employeeTracker_db;``` and enter.
        - Then enter ```SHOW databases;```.
        - To use the employees database; enter ```USE employeeTracker_db;```.
        - In order to use your .sql files enter ```source db/schema.sql;``` and enter, then type ```source db/seeds.sql;``` and enter.
        - Exit MySQL by entering ```quit;```.
  
  Run ```node index.js``` or ```npm start``` in your terminal to satrt.

## Usage
Get All Users

![Screenshot of app being used.](./assets/images/GetAllUsers.jpg)

Creat A Thought

![Screenshot of app being used.](./assets/images/CreateThought.jpg)

## Credits

List of collaborators:

- UCLA Extension, Coding Bootcamp Instructor and TAs

## License

The following licenses have been used in the development of this project:

[![License](https://img.shields.io/badge/License-MIT-success)](https://opensource.org/licenses/MIT)

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
![License: MIT](https://img.shields.io/badge/License-MIT-success)

## Repo Features

Using this repo can be initiated by running 'npm run Start' in the command terminal after opening the integrated terminal to initiate the program. Using this repo requires express and nodemon, and updated node modules to ensure application runs properly.

## How to Contribute

If other developers would like to contribute, you can contact me at armando.rod79@gmail.com.

## URL
GitHub: https://github.com/RamRod79/Social-Network-API.git

video: https://drive.google.com/file/

## Contact Info

For any other issues or comments please contact me at:

GitHub username: RamRod79

Email: armando.rod79@gmail.com