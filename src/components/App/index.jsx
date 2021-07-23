// import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";
import { useState, useEffect } from "react";
import narutoImg from "../../assets/images/naruto.png";
import { Content, NarutoImg } from "./styles";
import { Quotes } from "../../components";
import { getQuote } from "../../services";

import jutsoSound from "../../assets/sounds/jutso.mp3";

const audio = new Audio(jutsoSound);

function App() {
  const [state, setState] = useState({
    quote: "ok",
    speaker: "Speaker",
  });

  useEffect(() => {
    onUpdate();
  }, []);

  const onUpdate = async () => {
    const quote = await getQuote();
    setState(quote);
    audio.play();
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
