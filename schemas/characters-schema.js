const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  graphql,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const LocationType = require("./location-schema");
const OriginType = require("./origin-schema");

const CharactersType = new GraphQLObjectType({
  name: "RepresentACollectionOfCharacter",
  description: "Represente a collection of characters",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    status: {
      type: GraphQLNonNull(GraphQLString),
    },
    species: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
    gender: {
      type: GraphQLNonNull(GraphQLString),
    },
    origin: {
      type: OriginType,
    },
    location: {
      type: LocationType,
      resolve: () => {
        fetch("https://rickandmortyapi.com/api/location")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          });
      },
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
    },
    episode: {
      type: GraphQLNonNull(GraphQLString),
    },
    url: {
      type: GraphQLNonNull(GraphQLString),
    },
    created: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = CharactersType;

/*

Key	Type	Description
id	int	The id of the character.
name	string	The name of the character.
status	string	The status of the character ('Alive', 'Dead' or 'unknown').
species	string	The species of the character.
type	string	The type or subspecies of the character.
gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
origin	object	Name and link to the character's origin location.
location	object	Name and link to the character's last known location endpoint.
image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
episode	array (urls)	List of episodes in which this character appeared.
url	string (url)	Link to the character's own URL endpoint.
created	string	Time at which the character was created in the database.
*/
