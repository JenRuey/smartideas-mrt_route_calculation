import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/test-utils";

test("renders learn react link", async () => {
  let { getByTestId } = renderWithProviders(<App />);

  // check text if render
  expect(await screen.findByText(/SMART IDEAS/i)).toBeInTheDocument();
  expect(await screen.findByText(/MRT Route Calculation/i)).toBeInTheDocument();
  expect(await screen.findByText(/Start From/i)).toBeInTheDocument();
  expect(await screen.findByText(/End At/i)).toBeInTheDocument();
  expect(await screen.findByText(/Add Stop/i)).toBeInTheDocument();

  //check select if render
  const sinput = getByTestId("spointslct");
  expect(sinput).toBeInTheDocument();
  const einput = getByTestId("epointslct");
  expect(einput).toBeInTheDocument();
  const stinput = getByTestId("stopboxselector");
  expect(stinput).toBeInTheDocument();

  // check button if render
  const button = screen.getByText(/calculate/i);
  expect(button).toBeInTheDocument();

  // test event
  // fireEvent.change(sinput, { target: { value: "EW1" } });
  // expect(await screen.findByDisplayValue(/Pasir Ris/i)).toBeInTheDocument();

  // await waitFor(() => {
  //   const { getByText } = within(getByTestId("app-version"));
  //   expect(getByText("2")).toBeInTheDocument();
  // });
});
