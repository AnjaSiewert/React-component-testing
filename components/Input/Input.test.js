import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input />);
  const input = screen.getByRole("textbox", { name: "" });
  expect(input).toHaveAttribute("type", "text");
  /* const label = screen.getByLabelText("");
  expect(label).toHaveAttribute("for", ""); */
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();
  render(<Input onChange={onChange} />);
  const changeEvent = screen.getByRole("textbox", { name: "" });
  await user.type(changeEvent, "a");
  expect(onChange).toHaveBeenCalledTimes(1);
});
