import "./ListItem.css"

export default function ListItem({name, category, isForGoodWeather, id, onDelete, nameLength}) {
    const categoryClass = category.toLowerCase();
    return (
        <li className={`list-item ${categoryClass} ${ isForGoodWeather === true ? "goodweather" : "badweather" }`}>
            <h3 className={`${ nameLength > 20 ? "resize" : "" }`}>{name}</h3>
            <p className="category">Category: {category}</p>
            {isForGoodWeather === true ? <p className="weather">For good weather</p> : ""}
            <button onClick={()=> onDelete(id)} className="delete__button" type="button" title="delete activity" > Delete </button>
        </li>)
}