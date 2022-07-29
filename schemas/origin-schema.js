const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");
const OriginType = new GraphQLObjectType({
  name: "RepresentAOrigen",
  description: "Represente a origen character",
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    link: {
      type: GraphQLString,
    },
  }),
});

module.exports = OriginType;
