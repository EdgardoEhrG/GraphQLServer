const express = require('express');
const graphqlMiddleware = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema');
const resolver = require('./resolver');

// Database
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/graphql-players', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

const api = express();

// All queries
api.all('/graphql', graphqlMiddleware({
    schema,
    rootValue: resolver,
    graphiql: true
}));

module.exports = api;