import styled from "styled-components";

export const TodoDiv = styled.div`
  margin: 0.5rem;
  background: ${({ theme }) => theme.colors.bgTxt};
  font-size: 0.9rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  
  li {
  flex: 1;
}
`;
