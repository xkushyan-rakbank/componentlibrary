import React from 'react';

type ButtonProps = {
    type: "submit" | "reset" | "button";
    text: string;
};

export const Button: React.FC<ButtonProps> = ({ type, text }) => {
    return (
        <button type={type}>
            {text}
        </button>
    );
};