import {
  Quote,
  Speaker,
  Wrapper,
} from "./styles";

import { string } from "prop-types";

const Quotes = ({ quote, speaker, button }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <button>Quote No Jutsu</button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
};

export default Quotes;
