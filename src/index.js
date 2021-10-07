const { ApolloServer } = require('apollo-server');

const typeDefs = `
    type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => 'This is my service'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(() => {
        console.log('Server Started')
    });