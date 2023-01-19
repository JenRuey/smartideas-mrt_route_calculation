import "@testing-library/jest-dom";
import { waitFor, screen, within } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

test("renders learn react link", async () => {
  const { getByTestId } = renderWithProviders(<App />);

  const linkedElement = await screen.findByText(/learn react/i);
  expect(linkedElement).toBeInTheDocument();

  await waitFor(() => {
    const { getByText } = within(getByTestId("app-version"));
    expect(getByText("2")).toBeInTheDocument();
  });
});
