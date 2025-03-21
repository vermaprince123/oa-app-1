import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LandingHero from './Components/LandingHero/LandingHero'
import Recommendation from './Components/Recommendation/Recommendation'
import HomeAppliance from './Components/HomeApplicance/HomeAppliance'
import CurrentOffers from './Components/CurrentOffers/CurrentOffers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingHero />
      <Recommendation />
      <HomeAppliance />
      <CurrentOffers/>
    </>
  )
}

export default App
