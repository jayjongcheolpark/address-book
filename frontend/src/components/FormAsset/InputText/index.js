import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: solid #0792d4;
  padding: 5px 10px;
  font-size: 1em;
  color: #0792d4;
  width: 350px;
  outline: none
  line-height: 1.5
`;

const StyledLabel = styled.div`
  color: #7c7e7f;
`;
const StyledDiv = styled.div`
  margin-bottom: 1.5em;
`;

const InputText = ({ evtKey, label, value, changeHandler }) => (
  <StyledDiv>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput type="text" value={value} onChange={e => changeHandler(e, evtKey)} />
  </StyledDiv>
);

InputText.defaultProps = {
  value: '',
};

InputText.propTypes = {
  evtKey: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default InputText;
