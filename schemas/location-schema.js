const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  graphql,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const LocationType = new GraphQLObjectType({
  name: "RepresentALocation",
  description: "Represente a origen locations",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
    dimension: {
      type: GraphQLNonNull(GraphQLString),
    },
    residents: {
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

module.exports = LocationType;

/*
  Location schema
  Key	Type	Description
  id	int	The id of the location.
  name	string	The name of the location.
  type	string	The type of the location.
  dimension	string	The dimension in which the location is located.
  residents	array (urls)	List of character who have been last seen in the location.
  url	string (url)	Link to the location's own endpoint.
  created	string	Time at which the location was created in the database.
*/
