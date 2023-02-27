import { render,screen } from "@testing-library/react"
import { Navbar } from "../.."
import { BrowserRouter } from "react-router-dom"

describe('NavBar', () => { 
    it('should render without crashing', () => {
        render(<BrowserRouter><Navbar/></BrowserRouter> )
        const appElement = screen.getByText('My Shelf',{exact:false})
        expect(appElement).toBeInTheDocument()
    })
})

describe("Navbar Snapshot", () => {
    it("should render forming a snapshot", () => {
      const { asFragment } = render(<BrowserRouter><Navbar/></BrowserRouter>);
      expect(asFragment()).toMatchSnapshot(); 
    });
  });