import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import InputGroup from '../../../../FormAsset/InputGroup';
import { CONTACT, CONTACTS } from '../../../../../apollo/query';

const btnStyle = `
  box-sizing: border-box;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 3px;
  width: 130px;
  text-align: center;
`;
const StyledLink = styled(Link)`
  ${btnStyle} background-color: palevioletred;
  &:hover {
    background-color: #cd5c5c;
  }
`;

const StyledBtn = styled.button`
  ${btnStyle} background-color: #71b200;
  &:hover {
    background-color: #27ae60;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
  width: 376px;
`;

const BlueForm = styled.form`
  display: inline-block;
  margin: 2em;
  width: 390px;
  height: 500px;
  border-radius: 20px;
  padding: 2em;
  box-shadow: 0px 20px 150px #809baf;
`;

class ContactDetailEditForm extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      contact: { ...nextProps.contact },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      redirect: false,
    };
  }

  submitHandler = e => {
    e.preventDefault();

    const contact = {
      ...this.state.contact,
      contactId: this.props.contact.contactId,
    };
    delete contact.__typename;

    this.props.updateContact({
      variables: { input: contact },
      refetchQueries: [
        {
          query: CONTACT,
          variables: { contactId: contact.contactId },
        },
        {
          query: CONTACTS,
        },
      ],
    });

    this.setState({ redirect: true });
  };
  changeHandler = (e, key) => {
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [key]: e.target.value,
      },
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.props.contact.contactId}`} />;
    }

    return (
      <BlueForm onSubmit={this.submitHandler}>
        <InputGroup contact={this.state.contact} changeHandler={this.changeHandler} />
        <StyledDiv>
          <StyledBtn type="submit">Save</StyledBtn>
          <StyledLink to={`/${this.props.contact.contactId}`}>Cancel</StyledLink>
        </StyledDiv>
      </BlueForm>
    );
  }
}

ContactDetailEditForm.propTypes = {
  updateContact: PropTypes.func.isRequired,
};

export default ContactDetailEditForm;
