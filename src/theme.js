import { createGlobalStyle } from "styled-components";
import bgImg from "./assets/images/bg.jpeg";

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
      background: url(${bgImg}) center no-repeat;
      background-size: cover;
      color: #332c36;
      padding: 0;
      margin: 0;
      font-family:'New Tegomin', serif;
    }
`;
