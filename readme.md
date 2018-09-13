# Mythical Creatures! Get'em!

This is a test project showing how one might use graphQL Yoga alongside mongoDB to create a simple graphQL API that allows for document creation as well as data fetching. The subject matter is mythical creatures because...They cool.

set up:

```
git clone https://github.com/Bookshop-Interactive/mythical-creature-api-express.git
cd mythical-creature-api-express
yarn start
```

Then follow the console prompts to got to http://localhost:3003/play

try a few things in playground! EG:

```
query {
  mythics {
    name
    description
  }
}
```

or

```
query {
  mythic(name: "Dragon") {
    description
    powers
    rank
  }
}
```

or

```
mutation {
  summon(name: "Jackalope",
    description: "A hare and a antelope got frisky!",
    country: "USA, Texas",
    powers: ["Hopping", "Wisdom", "Horn Strikes"],
    weaknesses: ["Red Necks", "Hardcore Baptists"],
    rank: 2)
}
```
