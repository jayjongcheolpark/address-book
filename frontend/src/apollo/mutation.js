import gql from 'graphql-tag';

export const UPDATE_CONTACT = gql`
  mutation updateContact($input: ContactInput!) {
    updateContact(input: $input) {
      contactId
      firstname
      lastname
      phone
      email
      address
    }
  }
`;
