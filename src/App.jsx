import { useState, useEffect } from 'react'
import './App.css'
import LocationPicker from './components/LocationPicker/LocationPicker'
import Form from "./components/Form/Form"
import List from "./components/List/List"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import useLocalStorageState from 'use-local-storage-state'

function App() {

  const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
  const [weather, setWeather] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("");

  function handleLocation(newLocation){
    setLocation(newLocation)
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
      }, 5000);

      return () => clearInterval(intervalId);
    }, [location]);

  const isGoodWeather = weather?.isGoodWeather;
  const weatherFilteredActivities = isGoodWeather != null
  ? activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)
  : activities;
  const categories = ["sports", "culture", "social", "home"]; 

  const categoryFilteredActivities = weatherFilteredActivities.filter(activity =>
    selectedCategory === "" || activity.category.toLowerCase() === selectedCategory
);

  return (
    <>
      <h1>Weather & Activities App</h1>
      <LocationPicker onChangeLocation={handleLocation}/>
      <WeatherDisplay 
        condition={weather.condition} 
        temperature={weather.temperature} 
        location={weather.location}
      />
      <CategoryFilter 
          onCategoryChange={setSelectedCategory} 
          categories={categories} 
          selectedCategory={selectedCategory} 
      />
      <List 
        onDeleteActivity={handleDeleteActivity}
        activities={categoryFilteredActivities} 
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
