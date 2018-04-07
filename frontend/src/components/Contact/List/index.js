import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  padding: 10px 15px 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0;
`;

const renderContactList = (contacts, keyword) => {
  let filtered = contacts;
  if (keyword && keyword.length > 0) {
    filtered = contacts.filter(contact =>
      `${contact.lastname} ${contact.firstname}`.toLowerCase().match(keyword.toLowerCase())
    );
  }
  return filtered.map(({ contactId, lastname, firstname }) => (
    <StyledLink key={contactId} to={`/${contactId}`}>
      <Li className="nav__item">
        {lastname} {firstname}
      </Li>
    </StyledLink>
  ));
};

const ContactList = ({ data: { loading, error, contacts }, keyword }) => {
  if (loading && !contacts) {
    return <div />;
  }

  if (error) {
    return <div />;
  }

  return <Ul>{renderContactList(contacts, keyword)}</Ul>;
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
  keyword: PropTypes.string.isRequired,
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

export default connect(({ keyword }) => ({
  keyword,
}))(graphql(CONTACTS)(ContactList));
