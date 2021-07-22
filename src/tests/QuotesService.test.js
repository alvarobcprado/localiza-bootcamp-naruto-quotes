import { rest } from "msw";
import { setupServer } from "msw/node";
import { getQuote } from "../services";

const response = {
  test: "testing",
};

const response2 = {
  test: "testing2",
};

const server = setupServer(
  rest.get(
    "http://127.0.0.1:5000",
    (req, res, ctx) => {
      return res(ctx.json(response));
    }
  )
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Transforma uma resposta Json em um JS Object", async () => {
  const quote = await getQuote();

  expect(quote).toStrictEqual(response);
});
