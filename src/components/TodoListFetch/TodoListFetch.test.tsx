import { render, screen, waitFor } from "@testing-library/react";
import TodoListFetch from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

// import userEvent from '@testing-library/user-event'

const todos = [
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
];

const server = setupServer(
  rest.get(import.meta.env.VITE_TODOS_URL, (req, res, ctx) => {
    const r = res(ctx.json(todos))
    return r;
  })
);

describe("Testing TodoListFetch", () => {
  // Enable request interception.
  beforeAll(() => {
    server.listen();
  });

  // Reset handlers so that each test could alter them
  // without affecting other, unrelated tests.
  afterEach(() => server.resetHandlers());

  // Don't forget to clean up afterwards.
  afterAll(() => server.close());

  test("TodoListFetch OK", async () => {
    const r = render(<TodoListFetch />);
    await waitFor(() => {
      const tr = r.container.querySelectorAll("tbody>tr");
      expect(tr.length).toBe(3);
    });
  });
});
