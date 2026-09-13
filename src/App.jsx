import { Suspense, useState } from 'react'
import './App.css'
import Technologies from './components/Technologies'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'


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
      <Suspense fallback={<h1 className='text-center text-4xl text-gray-500 font-semibold my-15'>Loading...</h1>}>
        <Technologies techPromise={techPromise} 
        selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
      </Suspense>
      <Footer />
       
    </>
  )
}

export default App
