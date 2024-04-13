import React from 'react';
import { styled } from 'styled-components';
import logoImage from '../assets/logo.svg';
import OutlinedButton from './OutlinedButton';

function GlobalNav({ hasButton = false }) {
  return (
    <Nav>
      <Logo>
        <img className="logoImage" src={logoImage} alt="로고이미지" />
        <div className="logoTitle">Rolling</div>
      </Logo>
      {hasButton ? (
        <OutlinedButton size={40}>롤링 페이퍼 만들기</OutlinedButton>
      ) : null}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 350px;
  border-bottom: 2px solid var(--Gray-100);
`;

const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  .logoTitle {
    font-family: Poppins;
    color: var(--Gray-700);
    font-size: 20px;
    font-weight: 700;
  }
`;

export default GlobalNav;
