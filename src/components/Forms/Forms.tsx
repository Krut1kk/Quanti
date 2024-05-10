import React, {useState} from 'react';
import PhysicalForm, {FormData} from "../PhysicalForm/PhysicalForm.tsx";
import FormsSwapButtons from "../FormsSwapButtons/FormsSwapButtons.tsx";
import './forms.scss'
import TypesOfAssistance from "../TypesOfAssistance/TypesOfAssistance.tsx";
import PaymentMethods from "../PaymentMethods/PaymentMethods.tsx";
import SubmitBtn from "../ui/SubmitBtn/SubmitBtn.tsx";

const Forms: React.FC = () => {
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        return /^[0-9]+$/.test(phone);
    };
    const handleSubmit = (formData: FormData) => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name) {
            newErrors.name = "Ім'я є обов'язковим";
        }
        if (!formData.surname) {
            newErrors.surname = "Прізвище є обов'язковим";
        }
        if (!formData.nameCompany) {
            newErrors.nameCompany = "Назва компанії є обов'язковою";
        }
        if (!formData.email) {
            newErrors.email = "Email є обов'язковим";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Невірний формат email";
        }
        if (!formData.phone) {
            newErrors.phone = "Телефон є обов'язковим";
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = "Телефон повинен містити тільки цифри";
        }
        if (!formData.country) {
            newErrors.country = "Країна є обов'язковою";
        }
        if (!formData.city) {
            newErrors.city = "Місто є обов'язковим";
        }
        if (!formData.state) {
            newErrors.state = "Область/штат є обов'язковою";
        }
        if (!formData.address) {
            newErrors.address = "Адреса є обов'язковою";
        }
        if (!formData.index) {
            newErrors.index = "Поштовий індекс є обов'язковим";
        }
        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Форма отправлена:', formData);
        }
    };
    return (
        <div className='forms'>
            <div className="forms__container formsContainer">
                <h2 className="forms__title">Заповнiть форму</h2>
                <FormsSwapButtons/>
                <PhysicalForm onSubmit={handleSubmit} formErrors={formErrors}/>
                <h2 className='forms__title2'>Види допомоги</h2>
                <TypesOfAssistance/>
                <PaymentMethods/>
                <SubmitBtn onSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

export default Forms;
