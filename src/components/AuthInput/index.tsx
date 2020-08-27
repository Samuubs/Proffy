import React, { InputHTMLAttributes } from "react";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    name: string;
    type: string;
}

const AuthInput: React.FC<InputProps> = ({label, name, placeholder, type, ...rest}) => {
    return (
        <div className="input-auth-block">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} placeholder={placeholder} {...rest} />
        </div>
    );
}

export default AuthInput;