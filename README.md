# Intro to GraphQL

Repo for me to learn & experiment w/ GraphQL. While creating this, I was working through the getting started info here: https://graphql.org/graphql-js/

## Run Me

Download the project and go into the project directory.

Run:
```
npm install
npm start
```

Once the app is started, check it out at http://localhost:4000/

You can also muck with graphQL queries directly at localhost:4000/graphql

For example, you might try to run the following query to roll 3 20-sided dice:
```
{
  rollDice(numDice: 3, numSides: 20)
}
```