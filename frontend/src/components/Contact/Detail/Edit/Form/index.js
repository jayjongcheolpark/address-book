import React from 'react';
import styled from 'styled-components';

import InputGroup from '../../../../FormAsset/InputGroup';

const BlueForm = styled.form`
  margin: 2em;
  width: 600px;
  height: 700px;
  border-radius: 20px;
  padding: 2em;
`;

class ContactDetailEditForm extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { firstname, lastname, phone, email, address } = nextProps.contact;
    return {
      firstname,
      lastname,
      phone,
      email,
      address,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
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

export default ContactDetailEditForm;
