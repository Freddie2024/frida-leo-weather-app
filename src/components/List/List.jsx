import "./List.css";
import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";
// import useLocalStorageState from "use-local-storage-state";

export default function List({ activities = [], isGoodWeather }) {   
    return (
        <section>
        <h2>{isGoodWeather ? "Good Weather Activities" : "Bad Weather Activities"}</h2>
        <ul className="list">
            {activities.map(({ id, name, category, isForGoodWeather }) => (
                <ListItem 
                key={id}
                name={name}
                category={category} 
                isForGoodWeather={isForGoodWeather}
                />
               ))}
           </ul>
        </section>
    );
}

