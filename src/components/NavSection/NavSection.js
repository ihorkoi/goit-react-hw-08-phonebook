import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  :first-child {
    margin-right: auto;
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1440px;
  border-bottom: 1px solid black;
  display: flex;
  gap: 24px;
  :first-child {
    margin-right: auto;
  }
`;
