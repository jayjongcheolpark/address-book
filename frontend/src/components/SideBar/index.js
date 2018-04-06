import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar';
import ContactList from '../Contact/List';

const ColorDiv = styled.div`
  background-color: #7e57c2;
  padding: 10px;
  color: white;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const SideBar = () => (
  <ColorDiv>
    <CenterDiv>
      <h2>All Contacts</h2>
    </CenterDiv>
    <SearchBar />
    <ContactList />
  </ColorDiv>
);

export default SideBar;
