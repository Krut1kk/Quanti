
import './submitBtn.scss';
import React from "react";

interface SubmitBtnProps {
    onSubmit: (formData: FormData) => void;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({onSubmit}) => {
    const handleClick = () => {
        const formData = new FormData();
        onSubmit(formData);
    };
    return (
        <div className='submitBtn'>
            <div className="submitBtn__container formsContainer">
                <button onClick={handleClick}>Допомогти</button>
            </div>
        </div>
    );
};

export default SubmitBtn;