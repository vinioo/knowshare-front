import styled from 'styled-components';

export const Button = styled.button`
  width: 220px ;
  height: 56px;
  border-radius: 38px 38px 38px 38px;
  border: ${props => props.outline || props.filled ? '3px solid #7054BE' : '3px solid white'};
  background: #fafafa;
  background: ${props => props.outline && 'transparent'};
  background: ${props => props.filled && '#7054BE'};
  box-shadow: ${props => props.shadow && '0px 8px 28px rgba(125, 111, 238, 0.6)'};
  margin-top: ${props => `${props.mt}rem`};
  margin-bottom: ${props => `${props.mb}rem`};
  box-sizing: border-box;
  cursor: pointer;
  p {
    font-size: 1.2em;
    letter-spacing: 0.5px;
    font-weight: 600 !important;
    color: #755dc0;
    color: ${props => props.outline && '#1f1f1f'};
    color: ${props => props.filled && '#FAFAFA'};
    text-decoration: none;
  }
  @media only screen and (max-width: 1200px) {
    width: 200px; 
    height: 46px;
  }
`;
