import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(196.19deg, #7054be 17.02%, #54b1be 119.33%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 460px;
  height: 430px;
  min-width: 300px;
  background: white;
  border-radius: 25px;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    233.22deg,
    rgba(84, 177, 190, 0.8) 21.76%,
    rgba(112, 84, 190, 0.784) 79.32%
  );
`;

export const Content = styled.section`
  width: 30%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 27px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Raleway';
  margin-left: 10px;
`;

export const Input = styled.input`
  width: 70%;
  border-radius: 27px;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 1em;
  color: #000;
  background: #fff;
  border: 2px solid #7054be;
`;

export const Button = styled.button`
  width: 70%;
  border: 0;
  padding: 10px 30px;
  background: #7054be;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
  color: #fff;
  font-size: 1em;
  border-radius: 27px;

  &:hover {
    opacity: 0.7;
  }
`;

export const ForgetPass = styled.a`
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Buttons = styled.div`
  padding-top: 12px;
  width: 62%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  > button {
    width: 160px;
    height: 48px;
    border-radius: 40px;
    border: 2.2px solid #7054be;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
  }
`;
