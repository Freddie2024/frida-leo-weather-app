import "./List.css";
import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";

export default function List({ activities = []}) 
{
    
    return (
        <section className="list">
            {activities.map((activity)=>(
                <Fragment key={activity.id}>
                 <ListItem name={activity.name} category={activity.category} isForGoodWeather={activity.isForGoodWeather}/>
               </Fragment>
            ))}
           
        </section>
    );
}

