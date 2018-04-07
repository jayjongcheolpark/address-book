import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { search } from '../../redux/actions';

const Input = styled.input`
  display: block;
  margin: 0 1.2rem;
  padding: 0.2rem 0.4rem;
  color: black;
  width: 80%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem black;
  }
`;
const InputDiv = styled.div`
  margin: 20px 0;
  padding: 0;
`;

class SearchBar extends React.Component {
  searchKeyword = e => {
    this.props.searchAction(e.target.value);
  };

  render() {
    return (
      <InputDiv>
        <Input type="text" onChange={this.searchKeyword} />
      </InputDiv>
    );
  }
}

SearchBar.propTypes = {
  searchAction: PropTypes.func.isRequired,
};

export default connect(null, { searchAction: search })(SearchBar);
