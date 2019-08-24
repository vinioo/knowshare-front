import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  -webkit-box-shadow: -8px 6px 111px -27px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: -8px 6px 111px -27px rgba(0, 0, 0, 0.39);
  box-shadow: -8px 6px 111px -27px rgba(0, 0, 0, 0.39);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;
export const CardImage = styled.div`
  width: 50%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CardTitle = styled.div`
  h4 {
    margin-top: 18px !important;
    padding: 0px 12px 0px 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #1f1f1f;
  }
  p {
    color: #4b4545;
    font-size: 15px;
  }
`;
