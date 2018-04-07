import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';

import ContactDetailInfo from './Info';
import QueryContact from '../../QueryContact';

const StyledLink = styled(Link)`
  background-color: #71b200;
  font-size: 1em;
  color: white;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:hover {
    background-color: #27ae60;
  }
`;

const Div = styled.div`
  margin-top: 5em;
  max-width: 500px;
  display: block;
`;

const RightDiv = styled.div`
  float: right;
`;

const ContactDetail = props => {
  const num = Number(props.match.params.id);
  if (isNaN(num)) {
    return <Redirect to="/Error/Contact-ID-Is-Not-Valid" />;
  }

  return (
    <Div>
      <RightDiv>
        <StyledLink to={`/edit/${num}`}>edit</StyledLink>
      </RightDiv>
      <QueryContact contactId={num} component={ContactDetailInfo} />
    </Div>
  );
};

ContactDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ContactDetail;
