import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { App } from "../components";

import { rest } from "msw";
import { setupServer } from "msw/node";

const response = {
  speaker: "Speaker",
  quote: "Teste quote",
};

const server = setupServer(
  rest.get(
    process.env.REACT_APP_API,
    (req, res, ctx) => {
      return res(ctx.json(response));
    }
  )
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app, with a button, a quote and a button", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");
  const textEl = screen.getByText(/Speaker/);

  expect(buttonEl).toBeInTheDocument;
  expect(imageEl).toBeInTheDocument;
  expect(textEl).toBeInTheDocument;
});

test("Chama a api ao clicar no botão e atualiza seu text", async () => {
  render(<App />);
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(
    response.quote
  );

  expect(quoteEl).toBeInTheDocument;
});
