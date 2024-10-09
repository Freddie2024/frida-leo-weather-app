import './App.css'
import Form from "./components/Form/Form"
import List from "./components/List/List"
import useLocalStorageState from 'use-local-storage-state'

function App() {

  const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []})

  function handleAddActivity (newActivity){
    setActivities([...activities, newActivity])
  };
  console.log("activities:",activities)

  const isGoodWeather = true;
  const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);

  return (
    <>
      <h1>Weather & Activities App</h1>
      <List 
      activities={filteredActivities} isGoodWeather={isGoodWeather}/>
      <Form onAddActivity={handleAddActivity}/>
    </>
  )
}

export default App
