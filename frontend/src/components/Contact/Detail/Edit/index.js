import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import QueryContact from '../../../QueryContact';
import MutationEditContact from '../../../MutationEditContact';
import { search } from '../../../../redux/actions';

class ContactDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    this.props.searchAction('');
  }
  render() {
    const num = Number(this.props.match.params.id);
    if (isNaN(num)) {
      return <Redirect to="/Error/Contact-ID-Is-Not-Valid" />;
    }
    return <QueryContact contactId={num} component={MutationEditContact} />;
  }
}

ContactDetailEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(null, { searchAction: search })(ContactDetailEdit);
