
import {  render, screen } from '@testing-library/react';
import Home from '..';
import { BrowserRouter } from 'react-router-dom';

describe('Home Snapshot', () => {
    it('should render forming a snapshot', () => {
        const { asFragment } = render(<BrowserRouter><Home/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot(); 
    });
});
describe('Home', () => {
    it('should render without crashing', () => {
        render(<BrowserRouter><Home/></BrowserRouter>);
        const homeElement = screen.getByTestId('home');
        expect(homeElement).toBeInTheDocument();
    
    });
    it('should display data after data rendering', () => {
        render(<BrowserRouter><Home/></BrowserRouter>);
        const homeElement = screen.getByText('seems a bit empty in here...',{exact:false});
        expect(homeElement).toBeInTheDocument();
    });
    it('should navigate to songs page after clicking \'sync\'', () => {
        render(<BrowserRouter><Home/></BrowserRouter>);
        const linkElement = screen.getByRole('link', { name: 'sync' });
        expect(linkElement).toHaveAttribute('href', '/songs');
    });
});