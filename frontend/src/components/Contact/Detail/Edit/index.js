import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import QueryContact from '../../../QueryContact';
import MutationEditContact from '../../../MutationEditContact';

const ContactDetailEdit = props => {
  const num = Number(props.match.params.id);
  if (isNaN(num)) {
    return <Redirect to="/Error/Contact-ID-Is-Not-Valid" />;
  }
  return <QueryContact contactId={num} component={MutationEditContact} />;
};

ContactDetailEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ContactDetailEdit;
