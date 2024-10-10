import "./List.css";
import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";

export default function List({ activities = [], isGoodWeather }) {   
    return (
        <section className="activities__list">
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

