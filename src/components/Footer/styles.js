import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 6rem;
  background: #fafafa;
  height: 200px;
  box-shadow: 20px 20px 6px 20px rgba(0, 0, 0, 0.35);
`;
export const FooterItem = styled.div`
  width: 33.33%;
  text-align: left;
  &:nth-child(1) {
    text-align: left;
  }
  &:nth-child(2) h4 {
    margin: 0 auto;
  }
  &:nth-child(3) {
    text-align: right;
  }
`;
export const FooterList = styled.ul`
  list-style: none;
  display: inline-flex;
  li {
    margin-right: 16px;
    color: #1f1f1f;
  }
`;
export const FooterIcon = styled.img`
  width: 26px;
  margin-left: 12px;
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-size: 12px;
  }
`;
export const FooterRow = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;
