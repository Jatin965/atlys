import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

interface InputProps {
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  forgotPasswordLink?: string;
  onForgotPasswordClick?: () => void;
}

const InputField: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  className = "",
  name,
  id,
  forgotPasswordLink,
  onForgotPasswordClick,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderForgotPasswordLink = () => {
    if (forgotPasswordLink) {
      return (
        <Link to={forgotPasswordLink} onClick={onForgotPasswordClick}>
          Forgot Password?
        </Link>
      );
    }
    return null;
  };

  const isPasswordType = type === "password";
  const inputType = isPasswordType && isPasswordVisible ? "text" : type;

  return (
    <div className={`input-field ${className}`}>
      <div className="label-forgot-wrapper">
        {label && <label htmlFor={id}>{label}</label>}
        {renderForgotPasswordLink()}
      </div>
      <div className="input-wrapper">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          id={id}
          className={isPasswordType ? "password-input" : ""}
        />
        {isPasswordType && (
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? "🙈" : "👁️"}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
