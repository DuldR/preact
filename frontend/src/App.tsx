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

export default App
