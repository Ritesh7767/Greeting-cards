import { useState } from 'react'
import { GreetingCard } from './greeting'

function App() {

  let data = [
    {
      greeting : "Happy Birthday",
      name : 'Ritesh'
    },
    {
      greeting : "Good Morning",
      name : "Rinky"
    },
    {
      greeting : "Good evening",
      name : "Ankit"
    },
    {
      greeting : "Hello",
      name : "Vivek"
    }
  ]

  return (
    <> 
      {data.map(ele => <GreetingCard greeting={ele.greeting} name={ele.name}/>)}
    </>
  )
}

export default App
