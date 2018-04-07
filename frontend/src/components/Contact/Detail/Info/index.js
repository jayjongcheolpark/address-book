import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 3em;
  margin-left: 3em;
`;

const BlueDiv = styled.div`
  color: #0792d4;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Span = styled.span`
  padding: 0.5rem;
`;

const H2 = styled.h2`
  color: #7c7e7f;
  padding-left: 0.5rem;
`;

const ContactDetailInfo = ({ contact: { firstname, lastname, phone, email, address } }) => (
  <Div>
    <H2>
      {firstname} {lastname}
    </H2>
    <BlueDiv>
      <Span>Phone</Span>
      <Span>{phone}</Span>
      <Span>Email</Span>
      <Span>{email}</Span>
      <Span>Address</Span>
      <Span>{address}</Span>
    </BlueDiv>
  </Div>
);

ContactDetailInfo.propTypes = {
  contact: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactDetailInfo;
