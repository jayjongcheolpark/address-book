import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { CONTACT } from '../../apollo/query';

const QueryContact = ({ contactId, component: Component }) => (
  <Query query={CONTACT} variables={{ contactId }}>
    {({ loading, error, data }) => {
      if (error) {
        return <Redirect to="/Error/Network-Error" />;
      }

      if (loading) {
        return <div />;
      }

      if (data.contact === null) {
        return <Redirect to="/Error/There-Is-No-Matched-Contact" />;
      }
      return <Component contact={data.contact} />;
    }}
  </Query>
);

QueryContact.propTypes = {
  contactId: PropTypes.number.isRequired,
  component: PropTypes.func.isRequired,
};

export default QueryContact;
