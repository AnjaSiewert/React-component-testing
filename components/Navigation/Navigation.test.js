import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const link1 = screen.getByRole("link", { name: "Play" });
  const link2 = screen.getByRole("link", { name: "History" });
  expect(link1).toBeInTheDocument();
  expect(link2).toBeInTheDocument();
});
