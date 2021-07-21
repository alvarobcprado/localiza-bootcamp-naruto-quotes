// import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";
import narutoImg from "../../assets/images/naruto.png";
import { Content, NarutoImg } from "./styles";

function App() {
  return (
    <Content>
      <NarutoImg
        src={narutoImg}
        alt="Naruto with Kunai"
      />
    </Content>
  );
}

export default App;
