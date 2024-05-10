import './typesOfAssistance.scss';
import {typesOfAssistance} from './typesOfAssistance.ts';
import TypesCard from "../ui/TypesCard/TypesCard.tsx";


const TypesOfAssistance = () => {

    return (
        <div className='typesOfAssistance'>
            <h3 className="typesOfAssistance__title">Ви можете змінити вид допомоги</h3>
            <div className="typesOfAssistance__cards">
                {typesOfAssistance.map((item) => (
                    <TypesCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default TypesOfAssistance;
