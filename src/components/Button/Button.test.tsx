import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button: Suite', () => {
  const setup = (props: Partial<ButtonProps> = {}) => {
    render(
      <Button data-testid="button" {...props}>
        {props.children || 'Button'}
      </Button>
    );
    return screen.getByTestId('button');
  };

  test('Button: should render with default styles and children', () => {
    const button = setup();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');
  });

  test('Button: should apply custom variant and size styles', () => {
    const button = setup({ className: 'custom', size: 'small' });
    expect(button).toHaveClass('custom');
    expect(button).toHaveClass('py-1', 'px-4', 'rounded', 'text-xs');
  });

  test('Button: should be disabled when disabled prop is true', () => {
    const button = setup({ disabled: true });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
  });

  test('Button: should render loader when loading is true', () => {
    const button = setup({ loading: true });
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Button: should render icon on the left by default', () => {
    const icon = <span data-testid="icon">Icon</span>;
    const button = setup({ icon });
    expect(button.firstChild).toContainElement(screen.getByTestId('icon'));
  });

  test('Button: should render icon on the right when iconPosition is "right"', () => {
    const icon = <span data-testid="icon">Icon</span>;
    const button = setup({ icon, iconPosition: 'right' });
    expect(button.lastChild).toContainElement(screen.getByTestId('icon'));
  });

  test('Button: should call onClick handler when clicked', () => {
    const onClick = jest.fn();
    const button = setup({ onClick });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Button: should not call onClick handler when disabled', () => {
    const onClick = jest.fn();
    const button = setup({ onClick, disabled: true });
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
