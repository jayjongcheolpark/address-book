import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  padding: 5px;
  margin: 5px;
  border-bottom: 1px solid gray;
`;

const renderContactList = contacts =>
  contacts.map(({ contactId, lastname, firstname }) => (
    <Link key={contactId} className="nav__item" to={`/${contactId}`}>
      <Li>
        {lastname} {firstname}
      </Li>
    </Link>
  ));

const ContactList = ({ data: { loading, error, contacts } }) => {
  if (loading && !contacts) {
    return <div />;
  }

  if (error) {
    return <div />;
  }

  return <Ul>{renderContactList(contacts)}</Ul>;
};

ContactList.defaultProps = {
  data: {
    error: undefined,
    contacts: undefined,
  },
};

ContactList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    contacts: PropTypes.array,
  }),
};

const CONTACTS = gql`
  {
    contacts {
      contactId
      lastname
      firstname
    }
  }
`;

export default graphql(CONTACTS)(ContactList);
