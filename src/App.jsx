import { useState } from 'react'
import './App.css'
import Form from "./components/Form/Form"

function App() {

  const [activities, setActivities] = useState([])

  function handleAddActivity (newActivity){
    setActivities([...activities, newActivity])
  };
  console.log(activities)
  console.log("activities:",activities)

  return (
    <>
      <h1>Weather & Activities App</h1>
      <Form onAddActivity={handleAddActivity}/>
    </>
  )
}

export default App
