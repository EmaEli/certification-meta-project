import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

jest.mock("../../components/Button", () => ({ label, type, onClick }) => {
  return <button type={type} onClick={onClick}>{label}</button>;
});

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={[]}
      updateAvailableTimes={() => {}}
    />
  );
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});
