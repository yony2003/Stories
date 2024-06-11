// src/components/Button/Button.tsx
import React from 'react';
import './Button.css';
import { ButtonProps } from './Button.types';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, backgroundColor, size = 'medium', label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};