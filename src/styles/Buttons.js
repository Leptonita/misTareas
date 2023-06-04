import styled from "styled-components";

export const Button = styled.button`
color: #ff8c6c;
background: #fffef7;
border: none;
cursor: pointer;
transition: all 0.3s ease;

  &:hover {
  background: #ec5a32;
  color: white;
  }
`;

export const CrudBtn = styled(Button)`
padding: 0.4rem 0.9rem;
margin: 0.5rem;
border: 2px solid #ec5a32;
border-radius: 25px;
font-size: 1rem;
`;

export const ImpBtn = styled(CrudBtn)`
background-color: #a70656;
color: #f3fcff;
  &:hover {
  color: #0e596d;
  background-color: #47d7ff;
  border: 1px solid #0e596d;
  }
`;

export const ThemeBtn = styled(Button)`
padding: 0;
margin: 0.4rem;
font-size: 10px;
background: transparent;

 &:hover {
  background: transparent;
  }
`;