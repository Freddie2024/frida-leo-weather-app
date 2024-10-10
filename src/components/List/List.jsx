import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List({ activities = [], isGoodWeather, onDeleteActivity }) {   
    
    return (
        <section className="activities__list">
        <h2>{isGoodWeather ? "Good Weather Activities" : "Bad Weather Activities"}</h2>
        <ul className="list">
            {activities.map(({ id, name, category, isForGoodWeather }) => (
                <ListItem 
                    id={id}
                    key={id}
                    name={name}
                    category={category} 
                    isForGoodWeather={isForGoodWeather}
                    onDelete={onDeleteActivity}
                    activity
                />
               ))}
           </ul>
        </section>
    );
}

