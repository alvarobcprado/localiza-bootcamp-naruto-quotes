import {
  render,
  screen,
} from "@testing-library/react";
import { Button } from "../components";

test("Deve renderizar um botão com texto", () => {
  render(
    <Button onclick={() => {}}>Botão</Button>
  );

  const buttomEl = screen.getByText("Botão");
  expect(buttomEl).toBeInTheDocument;
});
