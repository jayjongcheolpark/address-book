import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: solid #0792d4;
  padding: 5px 10px;
  color: #0792d4;
  width: 200px;
  outline: none
  line-height: 1.5
`;

const StyledLabel = styled.div`
  color: #0792d4;
`;
const StyledDiv = styled.div`
  margin-bottom: 1.5em;
`;

const InputText = ({ label, value }) => (
  <StyledDiv>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput type="text" value={value} />
  </StyledDiv>
);

InputText.defaultProps = {
  value: '',
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default InputText;
