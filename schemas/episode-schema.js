const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  graphql,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const EpisodeType = new GraphQLObjectType({
  name: "RepresentAnEpisode",
  description: "Represente a origen episodes",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    air_date: {
      type: GraphQLNonNull(GraphQLString),
    },
    episode: {
      type: GraphQLNonNull(GraphQLString),
    },
    characters: {
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

module.exports = EpisodeType;

/*
Episode schema
Key	Type	Description
id	int	The id of the episode.
name	string	The name of the episode.
air_date	string	The air date of the episode.
episode	string	The code of the episode.
characters	array (urls)	List of characters who have been seen in the episode.
url	string (url)	Link to the episode's own endpoint.
created	string	Time at which the episode was created in the database.
*/
