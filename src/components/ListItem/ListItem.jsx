import "./ListItem.css"

export default function ListItem({name, category, isForGoodWeather}) {
    return (
    <li className={`${ isForGoodWeather === true ? "goodweather" : "badweather" }`}>
        <h3>{name}</h3>
        <p className="category">Category: {category}</p>
        {isForGoodWeather === true ? <p className="weather">For good weather</p> : ""}
    </li>)
}