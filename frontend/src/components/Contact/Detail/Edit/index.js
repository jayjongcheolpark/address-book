import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import QueryContact from '../../../QueryContact';
import ContactDetailEditForm from './Form';

const ContactDetailEdit = props => {
  const num = Number(props.match.params.id);
  if (isNaN(num)) {
    return <Redirect to="/Error/Contact-ID-Is-Not-Valid" />;
  }
  return <QueryContact contactId={num} component={ContactDetailEditForm} />;
};

ContactDetailEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ContactDetailEdit;
