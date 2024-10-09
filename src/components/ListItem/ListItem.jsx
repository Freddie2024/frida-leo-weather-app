export default function ListItem({name, category, isForGoodWeather}) {
    return (
    <card>
<h4>
    {name}
</h4>
<span>
   Category: {category}
</span>
{isForGoodWeather === true ? <p>For good weather</p> : ""}
    </card>)
}