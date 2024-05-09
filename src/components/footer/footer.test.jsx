import { render, screen } from "@testing-library/react"; 
import Footer from "./footer";
import '@testing-library/jest-dom/extend-expect';

test('check if the dowen counter works well', () => {
    render(<Footer/>);
    const down = screen.getByText("Important Links");
    expect(down).toBeInTheDocument();
});