import React, { ChangeEvent } from "react";
import './inputForm.scss';

interface InputFormProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div className='inputForm'>
            <label htmlFor={name}>{label}</label>
            <input
                className='inputForm__input'
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputForm;
