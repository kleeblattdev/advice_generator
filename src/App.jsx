import { useState, useEffect } from 'react'
import AdviceCard from './components/AdviceCard'
import './App.css'

function App() {
  const [advice, setAdvice] = useState()

  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      setAdvice(data)
      console.log(data)})
  },[])

  return (
    <>
    <AdviceCard advice={advice} setAdvice={setAdvice}></AdviceCard>
    </>
  )
}

export default App
