// import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";
import { useState } from "react";
import narutoImg from "../../assets/images/naruto.png";
import { Content, NarutoImg } from "./styles";
import { Quotes } from "../../components";
import { getQuote } from "../../services";

function App() {
  const [state, setState] = useState({
    quote: "ok",
    speaker: "Speaker",
  });

  console.log(state);

  const onUpdate = async () => {
    const quote = await getQuote();
    console.log(quote);
    setState(quote);
  };
  return (
    <Content>
      <Quotes {...state} onUpdate={onUpdate} />
      <NarutoImg
        src={narutoImg}
        alt="Naruto with Kunai"
      />
    </Content>
  );
}

export default App;
