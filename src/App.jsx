import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LandingHero from './Components/LandingHero/LandingHero'
import Recommendation from './Components/Recommendation/Recommendation'
import HomeAppliance from './Components/HomeApplicance/HomeAppliance'
import CurrentOffers from './Components/CurrentOffers/CurrentOffers'
import PopularInCity from './Components/PopularInCity/PopularInCity'
import WhyChooseOA from './Components/WhyChooseOA/WhyChooseOA'
import Testimonials from './Components/Testimonials/Testimonials'
import FAQ from './Components/FAQ/Faq'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingHero />
      <Recommendation />
      <HomeAppliance />
      <CurrentOffers/>
      <PopularInCity />
      <WhyChooseOA />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
