import { createGlobalStyle } from "styled-components";

export const Theme = {
  colors: {
    primary: "#6200ee",
    background: "#00000014",
    text: "#000000B3",
    success: "#135E81",
  },
  fonts: {
    regular: "New Tegomin, sans-serif",
  },
};

export const GlobalStyle = createGlobalStyle`
    body{
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family:'New Tegomin', serif;
    }
`;
