import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { FlippingCard } from './components/FlippingCard'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://127.0.0.1:8000/')
      console.log(res);
      
      const newData = await res.json()
      setdata(newData)
    }
  
    fetchData()
  }, [])
  

  return (
    <>
      <Header/>
      <FlippingCard/>
      <h1>{data.message}</h1>
    </>
  )
}

export default App
