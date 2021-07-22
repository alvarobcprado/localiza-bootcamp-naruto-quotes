// import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";
import narutoImg from "../../assets/images/naruto.png";
import { Content, NarutoImg } from "./styles";
import { Quotes } from "../../components";
import { getQuotes } from "../../services";

function App() {
  const onUpdate = () => {
    console.log("test");
  };
  return (
    <Content>
      <Quotes
        quote={"Ok"}
        speaker={"Speaker"}
        onUpdate={onUpdate}
      />
      <NarutoImg
        src={narutoImg}
        alt="Naruto with Kunai"
      />
    </Content>
  );
}

export default App;
