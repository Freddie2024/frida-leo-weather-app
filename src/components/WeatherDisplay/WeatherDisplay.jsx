import "./WeatherDisplay.css"

export default function WeatherDisplay(weather) {
    const weatherLocation = weather.location.toLowerCase()
    console.log(weatherLocation)
    return(    <>
        <section className={`weatherdisplay__container ${weatherLocation}`}>
            <div className="location-placeholder">
                <h4> {weather.location} </h4>
            </div>
            <div className="weather-icon__placeholder">
                    <span className="weather-icon"> {weather.condition} </span>
            </div>
            <div className="weather-info">
                <h2> {weather.temperature}º</h2>
            </div>
        </section>
        </>
    )
}