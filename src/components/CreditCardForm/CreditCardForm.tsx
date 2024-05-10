import React, { useState } from 'react';
import './creditCardForm.scss';

interface CreditCardData {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
}

const CreditCardForm: React.FC = () => {
    const [formData, setFormData] = useState<CreditCardData>({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState<Partial<CreditCardData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'cardNumber') {
            if (/^[0-9]{0,16}$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
            }
        } else if (name === 'expirationDate') {
            if (/^[0-9]{0,4}$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
            }
        } else if (name === 'cvv') {
            if (/^[0-9]{0,3}$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Partial<CreditCardData> = {};

        if (!formData.cardNumber) {
            newErrors.cardNumber = 'Необхідно вказати номер картки';
        }
        if (!formData.expirationDate) {
            newErrors.expirationDate = 'Необхідно вказати термін придатності';
        }
        if (!formData.cvv) {
            newErrors.cvv = 'Потрібен CVV код';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log(formData);
        }
    };

    return (
        <div className="credit-card-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        className='form-group__number'
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        placeholder="1234 5678 9012 3456"
                        onChange={handleChange}
                    />
                    {errors.cardNumber && <div style={{ color: "red" }} className="error">{errors.cardNumber}</div>}
                </div>
                <div className="form-group__data">
                    <div className="form-group">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input
                            type="text"
                            id="expirationDate"
                            name="expirationDate"
                            value={formData.expirationDate}
                            placeholder="MM/YY"
                            onChange={handleChange}
                        />
                        {errors.expirationDate && <div style={{ color: "red" }} className="error">{errors.expirationDate}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            placeholder="123"
                            onChange={handleChange}
                        />
                        {errors.cvv && <div style={{ color: "red" }} className="error">{errors.cvv}</div>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreditCardForm;
