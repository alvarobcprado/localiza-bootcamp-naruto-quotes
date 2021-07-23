import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Quotes } from "../components";
const quote = "teste quote";
const speaker = "random speaker";

test("Deve renderizar a frase, o autor e um botão", () => {
  render(
    <Quotes quote={quote} speaker={speaker} />
  );

  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);
  const buttonEl = screen.getByRole("button");
});

test("Chama um callback quando o botão for pressionado", () => {
  const callback = jest.fn((e) =>
    e.preventDefault()
  );

  render(
    <Quotes
      quote={quote}
      speaker={speaker}
      onUpdate={callback}
    />
  );

  const buttonEl = screen.getByRole("button");

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalled.once;
});
