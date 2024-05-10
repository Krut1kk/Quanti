import React from "react";
import './typesCard.scss'

interface TypesCardProps {
    item: {
        id: string;
        icon: React.FC;
        title: string;
    };
}

const TypesCard: React.FC<TypesCardProps> = ({ item }) => {
    return (
        <div key={item.id} className="typesOfAssistance__card">
            <div className="typesOfAssistance__icon">
                <item.icon/>
            </div>
            <p className="typesOfAssistance__text">{item.title}</p>
        </div>
    );
};

export default TypesCard;
