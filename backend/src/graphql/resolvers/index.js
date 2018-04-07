import ContactModel from '../../db/models/contact';

const resolvers = {
  Query: {
    contacts: () => ContactModel.find({}),
    contact: (root, { contactId }) => ContactModel.findOne({ contactId }),
  },
  Mutation: {
    updateContact: (root, { input }) => {
      const { contactId } = input;
      return ContactModel.findOneAndUpdate({ contactId }, input);
    },
  },
};

export default resolvers;
