import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Carmen" />);
  const playerName = screen.getByText(/carmen/i);
  expect(playerName).toBeInTheDocument();
  const button = screen.getAllByRole("button");
  expect(button).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();
  const onDecrease = jest.fn();
  const onIncrease = jest.fn();
  render(
    <Player
      onDecreasePlayerScore={onDecrease}
      onIncreasePlayerScore={onIncrease}
    />
  );
  const decreaseButton = screen.getByLabelText(/decrease score/i);
  const increaseButton = screen.getByLabelText(/increase score/i);
  await user.click(decreaseButton);
  await user.click(increaseButton);
  expect(onDecrease).toHaveBeenCalled();
  expect(onIncrease).toHaveBeenCalled();
});
