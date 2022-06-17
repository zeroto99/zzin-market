import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  // reset 요소 추가
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
  }
  .sr-only {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;