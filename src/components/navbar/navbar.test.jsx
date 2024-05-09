import { render, screen } from "@testing-library/react"; 
import Navbar from "./navbar";
import '@testing-library/jest-dom/extend-expect';

test('check if the dowen counter works well', () => {
    render(<Navbar/>);
    const counter = screen.getByTestId("logo");
    expect(counter).toBeInTheDocument();
});