import "./WeatherDisplay.css"

export default function WeatherDisplay(weather) {
    return(    <>
        <section className={`weatherdisplay__container ${ weather.location === "Europe" ? "europe" : "" }${ weather.location === "Sahara" ? "sahara" : "" }${ weather.location === "Rainforest" ? "rainforest" : "" }${ weather.location === "Arctic" ? "arctic" : "" }`}>
            <div className="location-placeholder">
                <h4> {weather.location} </h4>
            </div>
            <div className="weather-icon__placeholder">
                    <span className="weather-icon"> {weather.condition} </span>
            </div>
            <div className="weather-info">
                <h2> {weather.temperature}º C </h2>
            </div>
        </section>
        </>
    )
}