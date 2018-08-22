var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
// Types: String, Int, Float, Boolean, and ID
//   By default all are nullable, use ! to say it isn't
// Can also pass input to query (see rollDice)
var schema = buildSchema(`
  type Query {
    welcome: String
    quoteOfTheDay: String
    random: Float!
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  welcome: () => {
    return 'Hi there. Check out what I\'m doing with GraphQL!!!';
  },
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  // Uses object destructuring to pull parameters out of argument object
  rollDice: ({numDice, numSides}) => {
    console.log(numDice, numSides);
    let output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
};

var app = express();
app.use( express.static( 'server/public' ) );

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  // Can use the GraphiQL GUI tool to manually issue GraphQL queries
  graphiql: true, 
}));


app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});