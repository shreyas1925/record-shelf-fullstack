import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "..";

describe("Error Page Snapshot", () => {
    it("should render forming a snapshot", () => {
      const { asFragment } = render(<BrowserRouter><ErrorPage/></BrowserRouter>);
      expect(asFragment()).toMatchSnapshot(); 
    });
});

describe("Error Page", () => {
    it("should render page without crashing", () => {
      render(<BrowserRouter><ErrorPage/></BrowserRouter>);
      const errorPageElement = screen.getByTestId("error-page");
      expect(errorPageElement).toBeInTheDocument();
      
    });

    it("should display text after rendering", () => {
        render(<BrowserRouter><ErrorPage/></BrowserRouter>);
        const errorPageElement = screen.getByText("We are currently trying to fix the problem.");
        expect(errorPageElement).toBeInTheDocument();
      });
});