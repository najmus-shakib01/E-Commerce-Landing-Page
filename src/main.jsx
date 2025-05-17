import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import './app.css'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar'
import HeroSection from './Components/HeroSection/HeroSection'
import TopBanner from './Components/TopBanner/TopBanner'
import FlashSale from './Components/FlashSale/FlashSale'
import BarazMall from './Components/BarazMall/BarazMall'
import Footers from './Components/Footers/Footers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <LogoSearchBar />
    <HeroSection />
    <TopBanner />
    <FlashSale />
    <BarazMall />
    <Footers />
  </StrictMode>,
)