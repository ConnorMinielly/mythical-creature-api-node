# Mythical Creatures! Get'em!

🦖  🦄  🐲  

This is a test project showing how one might use graphQL Yoga alongside mongoDB to create a simple graphQL API that allows for document creation as well as data fetching. The subject matter is mythical creatures because...They cool.

set up:

```bash
git clone https://github.com/Bookshop-Interactive/mythical-creature-api-express.git
cd mythical-creature-api-express
yarn start
```

Then follow the console prompts to get to http://localhost:3003/play

try a few things in playground! EG:

```graphql
query {
  mythics {
    name
    description
  }
}
```

or

```graphql
query {
  mythic(name: "Dragon") {
    description
    powers
    rank
  }
}
```

or

```graphql
mutation {
  summon(name: "Jackalope",
    description: "A hare and an antelope got frisky!",
    country: "USA, Texas",
    powers: ["Hopping", "Wisdom", "Horn Strikes"],
    weaknesses: ["Red Necks", "Hardcore Baptists"],
    rank: 2)
}
```
