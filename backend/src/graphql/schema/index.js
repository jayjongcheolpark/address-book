import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';

const typeDefs = `
type Contact {
  contactId: Int
  firstname: String
  lastname: String
  phone: String
  address: String
  email: String
}
input ContactInput {
  contactId: Int!
  firstname: String
  lastname: String
  phone: String
  address: String
  email: String
}
type Query {
  contacts: [Contact]
  contact(contactId: Int!): Contact
}
type Mutation {
  updateContact(input: ContactInput!): Contact
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
