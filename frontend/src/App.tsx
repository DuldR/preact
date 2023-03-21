import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/app")
    }
  }, [])

  return (
    <BrowserRouter basename="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<ApiPage/>} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function SettingsPage() {

  return (
    <div>
      <h1> Settings Page </h1>
    </div>
  )
}

function HomePage() {
  const style = { padding : "8px" }

  return (
    <div style={style} >
      <h1> Home Page Yall </h1>
    </div>

  )
}

function ApiPage() {
  let esketit = () => {
    fetch("/bruh/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }})
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  let testketit = () => {
    console.log("GUCCI GANFG")
  }

  return(
    <div>
      <h1> HOWDY </h1>
      Bring it back now yall
      <button onClick={esketit}>To the left </button>
    </div>
  )
}

export default App
