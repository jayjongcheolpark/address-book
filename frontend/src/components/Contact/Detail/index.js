import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const CONTACT = gql`
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

const ContactDetail = props => {
  console.log(props);
  const num = Number(props.match.params.id);
  if (isNaN(num)) {
    return <Redirect to="/Error/Contact-ID-Is-Not-Valid" />;
  }
  return (
    <Query query={CONTACT} variables={{ contactId: num }}>
      {({ loading, error, data }) => {
        if (error) {
          return <Redirect to="/Error/Network-Error" />;
        }

        if (!loading) {
          if (data.contact === null) {
            return <Redirect to="/Error/There-Is-No-Matched-Contact" />;
          }
          console.log(data);
        }
        return <div>Detail</div>;
      }}
    </Query>
  );
};

export default ContactDetail;
