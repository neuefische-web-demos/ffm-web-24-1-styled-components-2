import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin: 5px;

  ${({ $variant }) => {
    if ($variant === "outlined") {
      return `border: 5px solid black`;
    } else if ($variant === "contained") {
      return css`
        background-color: black;
        color: white;

        &:hover {
          background-color: lightgrey;
          color: black;
          cursor: pointer;
        }
      `;
    }
  }}
`;

export default function HomePage() {
  return (
    <>
      <StyledButton>text</StyledButton>
      <StyledButton $variant="outlined">outlined</StyledButton>
      <StyledButton $variant="contained">contained</StyledButton>
    </>
  );
}
