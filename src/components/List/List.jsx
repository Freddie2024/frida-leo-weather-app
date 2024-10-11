import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List({ activities = [], isGoodWeather, onDeleteActivity }) {   
    let heading;
    if (isGoodWeather === undefined) {
        heading = "Fetching weather ...";
    } else {
        heading = isGoodWeather ? "Good Weather Activities" : "Bad Weather Activities"
    }    
    
    return (
        <section className="activities__list">
        <h2>{heading}</h2>
        
        <ul className="list">
            {activities.map(({ id, name, category, isForGoodWeather, nameLength }) => (
                <ListItem 
                    id={id}
                    key={id}
                    name={name}
                    category={category} 
                    isForGoodWeather={isForGoodWeather}
                    onDelete={onDeleteActivity}
                    activity
                    nameLength={name.length}
                />
               ))}
           </ul>
        </section>
    );
}

