import { uid } from "uid"
import "./Form.css"
export default function Form({onAddActivity}) {

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("Activity Added:", data);
        const { name, category, goodweather } = data;
        onAddActivity({ name, isForGoodWeather: goodweather === "on", id: uid(), category});
        e.target.reset();
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <legend><h2>Add new Activity</h2></legend>
            <label htmlFor="name">Name:
                <input type="text"  id="name" name="name"></input>
            </label>

            <label htmlFor="category">Category:
                <select type="dropdown" id="category" name="category">
                    <option name="sports">sports</option>
                    <option name="cultural">culture</option>
                    <option name="social">social</option>
                    <option name="home">at home</option>
                </select>
            </label>

            <label htmlFor="goodweather">Good weather activity:
                <input type="checkbox" id="goodweather" name="goodweather"></input>
            </label>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}