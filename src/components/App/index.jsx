// import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";
import narutoImg from "../../assets/images/naruto.png";
import { Content, NarutoImg } from "./styles";
import { Quotes } from "../../components";

function App() {
  return (
    <Content>
      <Quotes quote={"Ok"} speaker={"Speaker"} />
      <NarutoImg
        src={narutoImg}
        alt="Naruto with Kunai"
      />
    </Content>
  );
}

export default App;
