import React from 'react';
import { Mutation } from 'react-apollo';

import ContactDetailEditForm from '../Contact/Detail/Edit/Form';
import { UPDATE_CONTACT } from '../../apollo/mutation';

const MutationEditContact = ({ contact }) => (
  <Mutation mutation={UPDATE_CONTACT}>
    {(updateContact, { data }) => <ContactDetailEditForm updateContact={updateContact} contact={contact} />}
  </Mutation>
);

export default MutationEditContact;
