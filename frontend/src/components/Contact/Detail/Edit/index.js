import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import InputGroup from '../../../FormAsset/InputGroup';
import { CONTACT } from '../../../../apollo/query';

const BlueForm = styled.form`
  margin: 2em;
  width: 600px;
  height: 700px;
  border-radius: 20px;
  padding: 2em;
`;

class ContactDetailEdit extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    const { firstname, lastname, phone, email, address } = nextProps.contact;
    return {
      firstname,
      lastname,
      phone,
      email,
      address,
    };
  }

  submitHandler = e => {
    e.defaultPrevent();
  };
  changeHandler = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  render() {
    return (
      <BlueForm onSubmit={this.submitHandler}>
        <InputGroup contact={this.state} changeHandler={this.changeHandler} />
      </BlueForm>
    );
  }
}
const Wrapper = props => {
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

        if (loading) {
          return <div />;
        }

        if (data.contact === null) {
          return <Redirect to="/Error/There-Is-No-Matched-Contact" />;
        }
        return <ContactDetailEdit contact={data.contact} />;
      }}
    </Query>
  );
};

Wrapper.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Wrapper;
