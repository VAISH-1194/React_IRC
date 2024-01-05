import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Pages/Counter';

// test('couonter1', () => {
//   render(<Counter />);
//   const linkElement = screen.getByText(/Increase/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('couonter2', () => {
//   render(<Counter />);
//   const linkElement1 = screen.getByText(/Decrease/i);
// expect(linkElement1).toBeInTheDocument();
// });

test('Count_test_Default', ()=> {
    render(<Counter/>);
    const countElement = screen.getByText(/0/);
    expect(countElement).toBeInTheDocument();
});

test('Count_test_Increment', ()=>{
    render(<Counter/>);
    const inc = screen.getByText('Increase');
    const countElement = screen.getByText(/0/);

    fireEvent.click(inc);

    expect(countElement).toHaveTextContent('1');
});

test('Count_test_Decrement', ()=>{
    render(<Counter/>);
    const dec = screen.getByText('Decrease');
    const countElement = screen.getByText(/0/);

    fireEvent.click(dec);

    expect(countElement).toHaveTextContent('-1');
});

