import { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../Navbar/Navbar';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  height: 8rem;
  width: 100%;
  border-radius: 0px;
  justify-content: space-between;
  align-items: center;
  /* --c-white */
  background: var(--c-white);
  z-index: 5;
`;

class Header extends Component {
  render() {
    const { categories, currencies } = this.props;
    return (
      <HeaderContainer>
        <NavBar categories={categories} currencies={currencies} />
      </HeaderContainer>
    );
  }
}

export default Header;
