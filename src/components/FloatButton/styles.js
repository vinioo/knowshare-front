import styled from 'styled-components';

export const FloatButton = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 28px;
  right: 112px;
  z-index: 1;
  box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.6);
  &:hover {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
  }
`;
