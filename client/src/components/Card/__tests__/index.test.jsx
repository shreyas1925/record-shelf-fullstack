import Card from "..";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest");

const mockData = {
  id: "45e1d753-2986-43cb-9b9d-30c370056319",
  name: "This Love",
  genre: {
    id: "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
    name: "Pop",
  },
  artist: {
    id: "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
    name: "Maroon 5",
  },
  imageUrl: "https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537",
  publishedAt: "2002-06-25T00:00:00",
};

const mockConstants = {
  data: { count: 0, like: false },
};

describe("Card", () => {
  it("should render without crashing", () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });

  it("should render contents", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const countElement = screen.getByText("Maroon 5");
    const altElement = screen.getByAltText("heart");
    expect(altElement.src).toContain("heart-gray.svg");
    expect(countElement).toBeInTheDocument();
  });
});

describe("Like Count", () => {
  it("should be 0 before firing event", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  it("should be 1 after firing event once", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const countElement = screen.getByText("1");
      expect(countElement).toBeInTheDocument();
    });
  });
  it("should be 0 when firing event done twice", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const countElement = screen.getByText("1");
      expect(countElement).toBeInTheDocument();
    });
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const countElement = screen.getByText("0");
      expect(countElement).toBeInTheDocument();
    });
  });
});

describe("Like Heart", () => {
  it("should be gray heart before firing event", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const imageElement = screen.getByAltText("heart");
    expect(imageElement.src).toContain("heart-gray.svg");
  });

  it("should be red heart after firing event once", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const imageElement = screen.getByAltText("heart");
    expect(imageElement.src).toContain("heart-gray.svg");
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const imageElement = screen.getByAltText("heart");
      expect(imageElement.src).toContain("heart-red.svg");
    });
  });

  it("should be gray heart when firing event done twice", async () => {
    makeRequest.mockResolvedValue(mockConstants);
    render(<Card song={mockData} />);
    const imageElement = screen.getByAltText("heart");
    expect(imageElement.src).toContain("heart-gray.svg");
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const imageElement = screen.getByAltText("heart");
      expect(imageElement.src).toContain("heart-red.svg");
    });
    fireEvent.click(screen.getByAltText("heart"));
    await waitFor(() => {
      const imageElement = screen.getByAltText("heart");
      expect(imageElement.src).toContain("heart-red.svg");
    });
  });
});

describe("Card Snapshot", () => {
    it("should render forming a snapshot", () => {
      makeRequest.mockResolvedValue(mockConstants);
      const { asFragment } = render(<Card song={mockData} />);
      expect(asFragment()).toMatchSnapshot(); 
    });
});
