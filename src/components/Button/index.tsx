import React from 'react';
import styled from 'styled-components';
import { color } from '@edma/design-tokens';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  primary?: boolean;
  variant?: 'filled' | 'outlined' | 'link';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  label: any;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  primary = false,
  variant = 'filled',
  size = 'medium',
  fullWidth = false,
  className,
  disabled = false,
  onClick,
  ariaLabel,
  label
}: ButtonProps) => {

  return (
    <StyledButton
      primary={primary ? primary : false}
      variant={variant ? variant : 'filled'}
      type={type ? type : undefined}
      aria-label={ariaLabel ? ariaLabel : label}
      size={size ? size : 'medium'}
      className={className ? className : undefined}
      disabled={disabled ? disabled : undefined}
      onClick={onClick ? onClick : undefined}
      fullWidth={fullWidth ? fullWidth : undefined}
      label={label}
    >
      <span>{label}</span>
    </StyledButton>
  )
};

const StyledButton = styled('button')<ButtonProps>`
  align-self: flex-start;
  border-radius: 60px;
  width: ${(props) => props.fullWidth ? '100%' : 'auto'};
  cursor: pointer;
  overflow: hidden;

  ${props => {
    switch (props.variant) {
      case 'filled':
        switch (props.primary) {
          case true:
            return `
              position: relative;
              display: inline-block;
              border: 0;
              color: ${color.white};
              background-color: ${color.b500};
              transition: all .2s ease-in-out;

              &:hover {
                background-color: ${color.b700};
              }
            `;
          case false:
            return `
              display: inline-block;
              border: 0;
              color: ${color.white};
              background-color: ${color.v800};
              transition: all .2s ease-in-out;

              &:hover {
                background-color: ${color.v900};
              }
            `;
        };
      break;
      case 'outlined':
        switch (props.primary) {
          case true:
            return `
              display: inline-block;
              border: 2px solid;
              color: ${color.b500};
              background-color: transparent;
              border-color: ${color.b500}
            `;
          case false:
            return `
              display: inline-block;
              border: 2px solid;
              color: ${color.v800};
              background-color: transparent;
              border-color: ${color.v800}
            `;
        };
      break;
      case 'link':
        switch (props.primary) {
          case true:
            return `
              display: contents;
              border: 0;
              color: ${color.b500};
              background-color: transparent;
            `;
          case false:
            return `
              display: contents;
              border: 0;
              color: ${color.v800};
              background-color: transparent;
            `;
        }
    }
  }};
  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'medium':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
    }
  }};
  ${(props) => {
    switch (props.disabled) {
      case true:
        return `
          color: ${color.g400};
          background-color: ${color.g300};
          cursor: not-allowed;
        `;
    }
  }}
`;

export default Button;
