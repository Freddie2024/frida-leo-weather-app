import "./LocationPicker.css"
export default function LocationPicker({onChangeLocation}){

    function handleChange(e){
        const newLocation = e.target.value.toLowerCase();
        onChangeLocation(newLocation);
    }

    return(
        <div className="location-picker">
            <label htmlFor="location">Location:
                <select type="dropdown" id="location" name="location" onChange={handleChange}>
                    <option name="europe">Europe</option>
                    <option name="arctic">Arctic</option>
                    <option name="sahara">Sahara</option>
                    <option name="rainfores">Rainforest</option>
                </select>
            </label>
        </div>
    )
}
