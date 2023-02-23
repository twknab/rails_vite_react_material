# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version: Ruby 3.2.1 & Rails 7.0.4.2

* System dependencies

* Configuration
  * Install dependencies via `yarn install` or `npm install`
  * Start vite with: `npm run dev`
  * Start rails with `bin/rails server`

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## TODO

* use devise to create login/registraton functionality
  * I might end up coding my own authentication using bcrypt and bail on this for now, or need to take another crack at integrating the API with react
  * The challenge is since I'm using react and not rails views, I need to figure out how to login/authenticate/reset/logout without using the devise erbs
* add validations to model fields
* have basic lorem ipsum dashboard load for general purpose
* add backend tests for models and controllers
* fix jest interpretation issue with JSX
* deploy a working copy - dockerize entire project and deploy?

## Completed

* Create rails app + Vite + React + MaterialUI
* Create login form with client-side validation and graphic
* Create registration form with client-side valdiation and graphic
* Setup some basic front end tests
* Create User model and table
