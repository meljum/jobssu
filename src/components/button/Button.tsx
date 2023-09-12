import React from 'react';
import scss from './Button.module.scss';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className={scss.wrapper}>{text}</button>;
};

export default Button;