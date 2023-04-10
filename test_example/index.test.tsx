import { render, screen } from '@testing-library/react';
import { ExampleComponent } from 'test_example/ExampleComponent';
import '@testing-library/jest-dom';

describe('Test', () => {
  it('success case', () => {
    render(<ExampleComponent />);

    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
  });

  it('fail case', () => {
    render(<ExampleComponent />);

    const text = screen.getByText('text');
    expect(text).toBeInTheDocument();
  });
});
