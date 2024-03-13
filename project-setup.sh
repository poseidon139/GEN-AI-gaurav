#!/bin/bash

# Create a new Angular project
ng new db-ui

# Change directory to the project folder
cd db-ui

# Install dependencies
npm install

# Generate the main app module
ng generate module app

# Generate the routing module
ng generate module app-routing --flat --module=app
