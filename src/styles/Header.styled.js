import styled from "styled-components";
//import * as theme from "./Theme.styled";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

.title {
  text-align: center;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.title};
  min-width: 40vw;
}
titleInput {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  background: white;
}
`;

