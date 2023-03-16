import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import { input } from "@testing-library/user-event/dist/types/event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const inputs = screen.getAllByPlaceholderText(/e.g./i);
  const button = screen.getByRole("button", { name: /create game/i });
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByText(/create a new game/i);
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleSubmit = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={handleSubmit} />);
  const name = screen.getByLabelText(/name of game/i);
  const player = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: "Create game" });
  await user.type(name, "Uno");
  await user.type(player, "Anja");
  await user.click(button);
  expect(handleSubmit).toHaveBeenCalledWith({
    nameOfGame: "Uno",
    playerNames: ["Anja"],
  });
});

test("does not submit form if one input field is left empty", async () => {});
