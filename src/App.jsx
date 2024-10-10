import { useState, useEffect } from 'react'
import './App.css'
import LocationPicker from './components/LocationPicker/LocationPicker'
import Form from "./components/Form/Form"
import List from "./components/List/List"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import useLocalStorageState from 'use-local-storage-state'

function App() {

  const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");

  function handleLocation(newLocation){
    setLocation(newLocation)
    console.log("New location:", newLocation)
  }

  function handleAddActivity (newActivity){
    setActivities([...activities, newActivity])
  };

  function handleDeleteActivity(removeActivityId) {
    setActivities((prevActivities) => 
      prevActivities.filter((activity) => activity.id !== removeActivityId)
   );
  };
  
  // FETCH - WEATHER    
    useEffect(() => {
     
      const intervalId = setInterval(async () => {
            try {
            const response = await fetch(`https://example-apis.vercel.app/api/weather/${location}`);
            if (response.ok) {
              const weather = await response.json();
              setWeather(weather);
          }
        }   catch (error) {
            console.error("Bad response. Unable to fetch data.", error)
        }
      }, 8000);

      return () => clearInterval(intervalId);
    }, [location]);
    
  console.log("Activities:", activities)
  console.log("Current weather:", weather)

  const isGoodWeather = weather?.isGoodWeather;
  const filteredActivities = isGoodWeather != null
  ? activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)
  : activities;

  return (
    <>
      <h1>Weather & Activities App</h1>
      <LocationPicker onChangeLocation={handleLocation}/>
      <WeatherDisplay 
        condition={weather.condition} 
        temperature={weather.temperature} 
        location={weather.location}
      />
      <List 
        onDeleteActivity={handleDeleteActivity}
        activities={filteredActivities} 
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
