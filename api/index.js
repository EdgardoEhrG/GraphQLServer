const express = require('express');
const graphqlMiddleware = require('express-graphql');

const schema = require('./schema');
const resolver = require('./resolver');

const api = express();

// All queries - GET / POST / PUT ...
api.all('/graphql', graphqlMiddleware({
    schema,
    rootValue: resolver,
    graphiql: true
}));

module.exports = api;