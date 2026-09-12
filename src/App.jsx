import { useState } from 'react'
import './App.css'
import Technologies from './components/Technologies'
import Hero from './Hero'
import Nav from './Nav'


const techFetch = async ()=>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

const techPromise = techFetch();


function App() {

  const [selectedTech, setSelectedTech] = useState([])
  

  return (
    <>
      <Nav/>
      <Hero/>
      <Technologies techPromise={techPromise} 
      selectedTech={selectedTech} setSelectedTech={setSelectedTech}
       />
    </>
  )
}

export default App
