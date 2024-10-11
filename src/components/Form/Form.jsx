import { uid } from "uid"
import "./Form.css"
export default function Form({onAddActivity}) {

    function handleSubmit(e){
        e.preventDefault();
        const formElements = e.target.elements;
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("Activity Added:", data);
        const { name, category, goodweather } = data;
        onAddActivity({ name, isForGoodWeather: goodweather === "on", id: uid(), category});
        e.target.reset();
        formElements.name.focus();
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <legend><h2>Add new Activity:</h2></legend>
            <label htmlFor="name">Name: 
                <input type="text"  id="name" name="name" maxLength={50}></input>
            </label>

            <label htmlFor="category">Category: 
                <select type="dropdown" id="category" name="category">
                    <option name="sports">Sports</option>
                    <option name="culture">Culture</option>
                    <option name="social">Social</option>
                    <option name="home" value="home">Home</option>
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