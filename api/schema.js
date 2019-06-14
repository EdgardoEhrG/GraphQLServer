const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Player {
        id: ID!,
        name: String!,
        age: Int!,
        country: String!,
        club: String!,
        position: String!
    }

    enum Country {
        FRANCE
        SPAIN
    }

    type Query {
        player(id: ID!): Player!
        players(country: Country): [Player]!
    }
`);