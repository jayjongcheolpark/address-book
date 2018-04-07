import React from 'react';
import styled from 'styled-components';

import InputText from '../../../FormAsset/InputText';

const BlueDiv = styled.div`
  margin: 2em;
  width: 600px;
  height: 700px;
  border-radius: 20px;
  padding: 2em;
`;

const ContactDetailEdit = () => (
  <div>
    <BlueDiv>
      <InputText label="First Name" />
      <InputText label="Last Name" />
      <InputText label="Phone" />
      <InputText label="Email" />
      <InputText label="Address" />
    </BlueDiv>
  </div>
);

export default ContactDetailEdit;
