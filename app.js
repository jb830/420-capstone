/*
============================================
; Title:  brumfield-app.js 
; Author: Professor Krasso
; Date: 4, March, 2024
; Modified by: Joanna Brumfield
; Description: app.js
;===========================================
*/
// • app.js require statements 
const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');
const teamRoutes = require('./routes/brumfield-teams-routes');


const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WEB 420 RESTful APIs',
      version: '1.0.0',
    },
  },
  apis: ['./routes/brumfield-teams-routes.js'],
        
};

app.use('/api/teams', teamRoutes);

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//mongo setup with mongoose
const mongoDB = 'mongodb+srv://web420_user:s3cret@web420db.adii6dg.mongodb.net/web420DB?retryWrites=true&w=majority';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Application connected to Atlas');
});

//server
http.createServer(app).listen(app.get('port'), function() {
  console.log(`Application started and listening on port ${app.get('port')}`);
});