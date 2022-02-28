import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
  padding: 0;
  margin: 0;
  outline: none;
  border: 0;
  box-sizing: border-box;
}
html{
 font-size:62.5%;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.grey1};
    ${(props) => {
      return props.theme.fontStyles.regular;
    }}
}
`;
export default GlobalStyles;
