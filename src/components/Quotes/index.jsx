import {
  Quote,
  Speaker,
  Wrapper,
} from "./styles";

import { Button } from "../../components";

import { string } from "prop-types";

const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <Button onUpdate={onUpdate}>
        Quote No Jutsu
      </Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
};

export default Quotes;
