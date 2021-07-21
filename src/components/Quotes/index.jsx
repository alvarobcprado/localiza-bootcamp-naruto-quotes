import {
  Quote,
  Speaker,
  Wrapper,
} from "./styles";

import { Button } from "../../components";

import { string } from "prop-types";

const Quotes = ({ quote, speaker, button }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <Button>Quote No Jutsu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
};

export default Quotes;
