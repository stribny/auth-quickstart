# Authentication Quickstart with Express, Passport and Sequelize

This is a quick-start application that demonstrates basic authentication using Passport and Sequelize. It is built with:
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Passport](http://passportjs.org)
* [Sequelize](http://sequelizejs.com)
* [Handlebars](http://handlebarsjs.com/)
* and [Nightwatch](http://nightwatchjs.org/)

I wrote a blog post [Authentication Quickstart with Express, Passport and Sequelize](http://stribny.name/blog/2015/09/authentication-quickstart-with-express-passport-and-sequelize) about this quick-start.

## Requirements

As it is a Node application, you will need Node.js installed. 

The app uses a SQL database via Sequelize ORM. It was tested with PostgreSQL, but should work with other supported databases as well.

## Installation

Clone the repository and simply run `npm install` from the root folder.

## Configuration

In order to run the application, a database connection string has to be configured. The connection string is stored in `app/sequelize.js`.

When Sequelize is configured, you can run the setup script that creates the `users` table and also adds one default user (username: `user`, password: `user`). From the root directory run:

```
node setup.js
```

If you want to run the tests, it is necessary to configure Nightwatch.js using the `nightwatch.json` file. Namely it is required to provide server path to selenium. For more information see the [documentation](http://nightwatchjs.org/guide#settings-file).

## Run the application

From the root folder of the project, you can run the application with: 
```
node app.js
```
You can then access the application on `http://localhost:8080`.

Available pages:
* Log in on `http://localhost:8080`
* Sign up on `http://localhost:8080/signup`
* Dashboard [requires to be logged in] on `http://localhost:8080/dashboard`
* Log out on `http://localhost:8080/logout`

## Run the tests

A basic set of Nightwatch end-to-end tests is provided. To run the tests, first make sure that the application is running and then start the test suite by typing `nightwatch` in the root folder. Note that you have to configure Nightwatch.js first.

## License

Author: [Petr Stříbný](http://stribny.name)

License: The MIT License (MIT)
