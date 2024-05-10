

import React, { useState, ChangeEvent } from 'react';
import InputForm from '../ui/InputForm/InputForm';
import './physicalForm.scss';

export interface FormData {
    name: string;
    surname: string;
    nameCompany: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    index: string;
    state: string;
}

interface PhysicalFormProps {
    onSubmit: (formData: FormData) => void;
    formErrors: Partial<FormData>;
}

const PhysicalForm: React.FC<PhysicalFormProps> = ({ onSubmit, formErrors }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        nameCompany: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        index: '',
        state: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className='physicalForm' onSubmit={handleSubmit}>
            <div className='physicalForm__container formsContainer'>
                <div className='physicalForm__userDetails'>
                    <div className='physicalForm__name'>
                        <div>
                            <InputForm
                                label={"Ім'я"}
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={"Ваше ім'я"}
                            />
                            {formErrors.name && <div style={{ color: "red" }} className="error">{formErrors.name}</div>}
                        </div>
                        <div>
                            <InputForm
                                label={"Прізвище"}
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                                placeholder={"Введіть ваше прізвище"}
                            />
                            {formErrors.surname && <div style={{ color: "red" }} className="error">{formErrors.surname}</div>}
                        </div>
                    </div>
                    <div className="physicalForm__company">
                        <InputForm
                            label={"Назва компанії"}
                            name="nameCompany"
                            value={formData.nameCompany}
                            onChange={handleInputChange}
                            placeholder={"Введіть назву вашої компанії"}
                        />
                        {formErrors.nameCompany && <div style={{ color: "red" }} className="error">{formErrors.nameCompany}</div>}
                    </div>
                    <div className="physicalForm__email">
                        <InputForm
                            label={"Email"}
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={"Введіть ваш email"}
                        />
                        {formErrors.email && <div style={{ color: "red" }} className="error">{formErrors.email}</div>}
                    </div>
                    <div className="physicalForm__phone">
                        <InputForm
                            label={"Телефон"}
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={"Введіть ваш номер телефону"}
                        />
                        {formErrors.phone && <div style={{ color: "red" }} className="error">{formErrors.phone}</div>}
                    </div>
                </div>
                <div className="physicalForm__details">
                    <div className="physicalForm__country">
                        <InputForm
                            label={"Країна"}
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder={"Введіть вашу країну"}
                        />
                        {formErrors.country && <div style={{ color: "red" }} className="error">{formErrors.country}</div>}
                    </div>
                    <div className="physicalForm__city">
                        <div>
                            <InputForm
                                label={"Місто"}
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder={"Введіть ваше місто"}
                            />
                            {formErrors.city && <div style={{ color: "red" }} className="error">{formErrors.city}</div>}
                        </div>
                        <div>
                            <InputForm
                                label={"Область/штат"}
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder={"Введіть вашу область/штат"}
                            />
                            {formErrors.state && <div style={{ color: "red" }} className="error">{formErrors.state}</div>}
                        </div>
                    </div>
                    <div className="physicalForm__address">
                        <InputForm
                            label={"Адреса"}
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder={"Введіть вашу адресу"}
                        />
                        {formErrors.address && <div style={{ color: "red" }} className="error">{formErrors.address}</div>}
                    </div>
                    <div className="physicalForm__index">
                        <InputForm
                            label={"Поштовий індекс"}
                            name="index"
                            value={formData.index}
                            onChange={handleInputChange}
                            placeholder={"Введіть ваш поштовий індекс у форматі XXXXX-"}
                        />
                        {formErrors.index && <div style={{ color: "red" }} className="error">{formErrors.index}</div>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PhysicalForm;
