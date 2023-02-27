import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Songs from "..";
import makeRequest from "../../../utils/makeRequest";
import { Card } from "../../../components";

jest.mock("../../../utils/makeRequest");

const mockData = {
  data: [
    {
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
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537",
      publishedAt: "2002-06-25T00:00:00",
    },
  ],
};
const mockSong = {
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

describe("Song Snapshot", () => {
  it("should render forming a snapshot", () => {
    makeRequest.mockResolvedValue(mockData);
    const { asFragment } = render(
      <BrowserRouter>
        <Songs />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Cards length", () => {
  it("should display number of cards", async () => {
    makeRequest.mockResolvedValue(mockData);
    render(
      <BrowserRouter>
        <Songs />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId("card").length).toEqual(1);
    });
  });
});

describe("Songs", () => {
  it("should render without crashing", async() => {
    makeRequest.mockResolvedValue(mockData);
    render(
      <BrowserRouter>
        <Songs />
      </BrowserRouter>
    );
    await waitFor(()=>{
      const SongsElement = screen.getByTestId("songs");
      expect(SongsElement).toBeInTheDocument();
    })
    
  });

  it("should display data after rendering", async () => {
    makeRequest.mockResolvedValue(mockData);
    render(
      <BrowserRouter>
        <Songs />
      </BrowserRouter>
    );

    await waitFor(() => {
    const SongsElement = screen.getByText("all songs", { exact: false });
    expect(SongsElement).toBeInTheDocument();
    })
  });

  it("should navigate to songs page after clicking 'sync'", async() => {
    makeRequest.mockResolvedValue(mockData);
    render(
      <BrowserRouter>
        <Songs />
      </BrowserRouter>
    );
    await waitFor(() => {
    const linkElement = screen.getByTestId("genre");
    expect(linkElement).toHaveAttribute("href", "/genre");
    })
  });
});
