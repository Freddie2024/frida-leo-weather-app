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

  return (
    <>
      <h1>Weather & Activities App</h1>
      <List 
      activities={activities}/>
      <Form onAddActivity={handleAddActivity}/>
    </>
  )
}

export default App
