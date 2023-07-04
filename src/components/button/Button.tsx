import React, { FC } from "react";
import scss from "./Button.module.scss"

interface ButtonProps {
	text: any;
  }
  
  const Button: React.FC<ButtonProps> = ({ text }) => {
	return <button className={scss.button}>{text}</button>;
  };
  
  export default Button;