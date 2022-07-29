/*
  Author: Mohtadi Bakali Tahiri
  Date: 29/07/2022
  Proyect: Rick and Morty,
  Website: https://rickandmortyapi.com/documentation
*/

const express = require("express");
const expressGraphql = require("express-graphql");
const fetch = require("node-fetch");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  graphql,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

/* Importing schemas */
const CharactersType = require("./schemas/characters-schema");
const CharacterType = require("./schemas/character-schema");
const LocationType = require("./schemas/location-schema");
const EpisodeType = require("./schemas/episode-schema");
/* End Importing */

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    characters: {
      type: new GraphQLList(CharactersType),
      description: "Returning a collection fof characters",
      resolve: () =>
        fetch("https://rickandmortyapi.com/api/character")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data.results;
          }),
    },
    character: {
      type: CharacterType,
      description: "Returning a single Character",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => {
        // Check if the param is not a number
        const _args = args.id;
        if (isNaN(_args)) {
          return;
        }
        return fetch(`https://rickandmortyapi.com/api/character/${args.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          });
      },
    },

    episodes: {
      type: new GraphQLList(EpisodeType),
      description: "Return a collection of Episodes",
      resolve: () =>
        fetch("https://rickandmortyapi.com/api/episode")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data.results;
          }),
    },
    episode: {
      type: EpisodeType,
      description: "Return a single episode",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => {
        // Check if the param is not a number
        const _args = args.id;
        if (isNaN(_args)) {
          return;
        }
        return fetch(`https://rickandmortyapi.com/api/episode/${args.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          });
      },
    },
    locations: {
      type: new GraphQLList(LocationType),
      description: "Return a collection of Locations",
      resolve: () =>
        fetch("https://rickandmortyapi.com/api/location")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data.results;
          }),
    },
    location: {
      type: LocationType,
      description: "Return a single Location",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => {
        // Check if the param is not a number
        const _args = args.id;
        if (isNaN(_args)) {
          return;
        }
        return fetch(`https://rickandmortyapi.com/api/location/${args.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          });
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  expressGraphql({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
