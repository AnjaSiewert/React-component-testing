import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <>
      <Input name="game" labelText="labelText" placeholder="placeholder" />
      {/* <label htmlFor="for" labelText="label" /> */}
    </>
  );
  const input = screen.getByLabelText("labelText");
  expect(input).toHaveAttribute("placeholder", "placeholder");
  /* const label = screen.getByLabelText("label");
  expect(label).toHaveAttribute("htmlFor", "for"); */
});

/* test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();
  render(<Input onChange={onChange} labelText="input field" />);
  const input = screen.getByLabelText("input field");
  await user.type(input, "abc");
  expect(onChange).toHaveBeenCalledTimes(1);
}); */
