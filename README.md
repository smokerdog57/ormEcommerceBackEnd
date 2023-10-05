# 13 Object-Relational Mapping (ORM): E-Commerce Back End

### Link to GitHub repository:  https://github.com/smokerdog57/ormEcommerceBackEnd
### Castify link:   			https://drive.google.com/file/d/1ElNgsKaSbCrkKC_MV9yOo0GPZpPversy/view

## Badges
    
![github](https://img.shields.io/badge/github-Profile-lightgrey.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow.svg)
![node.js](https://img.shields.io/badge/node.js-12.0-green.svg)
![npm](https://img.shields.io/badge/npm-6.14.4-blue.svg)
![Express](https://img.shields.io/badge/Express-red.svg)
![chrome castify](https://img.shields.io/badge/chrome%20castify-orange.svg)
![Sequelize](https://img.shields.io/badge/Sequelize-blue.svg)
![MySQL2](https://img.shields.io/badge/MySQL2-blue.svg)
![dotenv](https://img.shields.io/badge/dotenv-blue.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Mock-up](#mock-up)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

This application serves as a back-end eCommerce database server, utilizing key technologies such as ORM, MySQL2, Sequelize, Node.js, Express, and Insomnia. These technologies are employed to build and test the application, allowing for the use of Insomnia's CRUD commands to interact with API routes and their associated functionalities.  The database is dropped and recreated by executing the following commands:
	mysql -u root -pw;
	source ./db/schema.sql;

Following the creation of the database, the database models (tables) are defined and the initial data is seeded.  This is accomplished by executing the bash command: node ./seeds/index.js This command utilizes Sequelize to generate table models and establish associations based on the definitions in ./models/index.js. The file ./models/index.js imports Category.js, Product.js, ProductTag.js, and Tag.js scripts, which extend the built-in Sequelize model class and initialize model properties.

The next step is to start the backend server.  To start Server, execute the following bash command to run the ./server.js script: npm start. This script establishes a connection to the 'ecommerce_db' database by calling ./config/connection.js and sets up API routes by calling ./routes/index.js. the server application is now running and ready to serve API requests via Insomnia.

## Installation
  
1. create a new github repository named 'ormEcommerceBackEnd'
2. launch microsoft visual studio
3. enter cli:  cd ~/bootcamp/homework
4. enter cli:  git clone <repository> // creates ormEcommerceBackEnd directory
5. enter cli:  cd ormEcommerceBackEnd
6. enter cli:  npm init // this initializes the package.json project file
7. Edit the `package.json` file to add the following dependencies:
   - "dotenv": "^8.2.0",
   - "express": "^4.17.1",
   - "mysql2": "^2.1.0",
   - "sequelize": "^5.21.7"
8. enter cli: npm install //install the dependencies
9. install Insomnia website: Go to Insomnia website using your web browser, download and install.
	- Go to the official Insomnia website at https://insomnia.rest/download/ to download the client.
	- Download Insomnia for Windows.
	- Run the downloaded installer and follow the installation instructions.
10. After running above steps create, copy and/or confirm the following directory structure and files:
	assets			// copy from challenge
	config
	   connection.js	// create new file
	db
	   schema.sql			// xxx
	models
	   Category.js			// xxx
	   index.js			// xxx	   
	   Product.js			// xxx
	   ProductTag.js		// xxx
	   Tag.js			// xxx 
	routes
	   api
		category-routes.js
		index.js
		product-routes.js
		tag-routes.js	
	   index.js
	seeds
	   category-seeds.js
	   index.js
	   product-seeds.js
	   product-tag-seeds.js
	   tag-seeds.js
	.env
	.gitignore
	node_modules
	package.json		// confirm: created by npm		
	package-lock.json	// confirm: created by npm	
	README.md		// copy from challenge

## Usage

1. open MS Visual Studio and terminal
2. enter cli:  cd homework/ormEcommerceBackEnd
3. enter cli:  mysql -u root -p <when prompted enter password>
4. enter cli:  source ./db/schema.sql    // create the database
5. open a second MS Visual Studio terminal session
6. enter cli:  cd homework/ormEcommerceBackEnd
7. enter cli:  npm run seed
8. enter cli:  npm start
9. Launch Insomnia from your desktop or the Start menu.
10. After installation is complete, launch Insomnia from your applications or programs menu.
11. Open Insomnia and set up a new workspace.
12. Create Requests to test the API endpoints and organized into folders and CRUD request and request bodies.
13. Use the created requests to test the app by sending requests to API server (e.g., http://localhost:3001) and receive responses.

## Requirements
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Mock-Up

The following video the shows the application in use:
https://drive.google.com/file/d/1ElNgsKaSbCrkKC_MV9yOo0GPZpPversy/view

## License

github, jses6, express.js
https://opensource.org/licenses/MIT

npm
https://opensource.org/licenses/Artistic-2.0


- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributing

1. Sandy Smith (tutor):  Sandy helped me understand the acceptance criteria.

## Tests

```
Test001: execute schema.sql, then verify ecommerce_db is created.
Test002: execute npm run seed, then verify the employees db is seeded with the starter date.
Test003: execute npm start, then verify the server is listening on port 3001.
Test004: using insomnia test the CRUD methods to exercise the database.
```

## Questions
  
### Github username
smokerdog57

### Github url
https://github.com/smokerdog57/ormEcommerceBackEnd
  
### Contact me
email: smokerdog57@gmail.com
phone: 941-221-1132