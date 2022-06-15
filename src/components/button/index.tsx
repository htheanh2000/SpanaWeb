import { FunctionComponent } from 'react';
import './button.scss';
type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  state: 'primary' | 'secondary' | 'ghost';
  align?: 'none' | 'left' | 'right' | 'justify' | 'double icon';
  size?: 'small' | 'medium' | 'large';
  body?: 'normal' | 'square' | 'ellipse';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, state, size, className, onClick, type } = props;
  return (
    <button
      type={type}
      className={`button headline bold flex align-center jc-center c-pointer button--${state} 
        button--${size} flex ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
