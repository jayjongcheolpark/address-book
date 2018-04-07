import gql from 'graphql-tag';

export const CONTACT = gql`
  query contact($contactId: Int!) {
    contact(contactId: $contactId) {
      contactId
      firstname
      lastname
      phone
      email
      address
    }
  }
`;

export const CONTACTS = gql`
  {
    contacts {
      contactId
      lastname
      firstname
    }
  }
`;
