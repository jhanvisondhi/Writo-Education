import React from 'react';


interface ButtonProps {
  onClick?: () => void; // Optional onClick prop
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', type = 'button' }) => {
  const className = `button ${variant}`;
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
