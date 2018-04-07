import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputText from '../InputText';

const InputGroup = ({ contact: { firstname, lastname, phone, email, address }, changeHandler }) => (
  <Fragment>
    <InputText evtKey="firstname" label="First Name" value={firstname} changeHandler={changeHandler} />
    <InputText evtKey="lastname" label="Last Name" value={lastname} changeHandler={changeHandler} />
    <InputText evtKey="phone" label="Phone" value={phone} changeHandler={changeHandler} />
    <InputText evtKey="email" label="Email" value={email} changeHandler={changeHandler} />
    <InputText evtKey="address" label="Address" value={address} changeHandler={changeHandler} />
  </Fragment>
);

InputGroup.propTypes = {
  contact: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default InputGroup;
