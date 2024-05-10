import React from "react";
import './paymentMethodCard.scss';

interface PaymentMethodCardProps {
    item: {
        id: string;
        icon?: React.FC<React.SVGProps<SVGSVGElement>>;
        title?: string;
        description: string;
    };
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ item }) => {
    return (
        <div className="paymentMethod__card">
            <div className="paymentMethod__name">
                {item.icon && <item.icon className="paymentMethod__card-icon" />}
                {item.title && <p className="paymentMethod__card-title">{item.title}</p>}
            </div>
            <p className="paymentMethod__card-description">{item.description}</p>
        </div>
    );
};

export default PaymentMethodCard;
