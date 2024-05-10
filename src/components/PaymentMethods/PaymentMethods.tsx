import './paymentMethod.scss'
import {paymentMethod} from "./paymentMethod.ts";
import PaymentMethodCard from "../ui/PaymentMethodCard/PaymentMethodCard.tsx";
import CreditCardForm from "../CreditCardForm/CreditCardForm.tsx";

const PaymentMethods = () => {
    return (
        <div className='paymentMethod'>
            <div className="paymentMethod__container formsContainer">
                <div className="paymentMethod__content">
                    <div className="paymentMethod__variants">
                        <h6 className="paymentMethod__title">Способ оплаты</h6>
                        <div className="paymentMethod__cards">
                            {paymentMethod.map((item) => (
                                <PaymentMethodCard item={item} key={item.id}/>
                            ))}
                        </div>
                    </div>
                    <div className="paymentMethod__credit">
                        <div className="paymentMethod__creditTitle">
                            <h6 className="paymentMethod__title">Кредитная карта</h6>
                        </div>
                        <CreditCardForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;