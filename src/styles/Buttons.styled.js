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

export const SymbolBtn = styled(Button)`

  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  /* Preferred icon size */
  display: flex;
  line-height: 1.8;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: white;
  background-color: #ffc72d;
  height: 54px;
  width: 50px;
  justify-content: center;

`;

export const PlusBtn = styled(SymbolBtn)`
cursor: pointer;
  color: white;
  /* background-color: #ff6f47; */
  background-color: ${({ theme }) => theme.colors.plus};
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

export const TaskBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
`;

export const TaskTrashBtn = styled(TaskBtn)`
background: #ff6f47;
transition: all 0.3s ease;

  &:hover {
  background: #ec5a32;
  color: white;
  }
`;
export const TaskCompletehBtn = styled(TaskBtn)`
background: rgb(10, 193, 44);
transition: all 0.3s ease;

  &:hover {
  background: rgb(3, 157, 31);
  color: white;
  }
`;