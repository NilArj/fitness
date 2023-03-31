import { useEffect, useState } from "react"
import { SelectedPage } from './shared/types'
import Navbar from "./sections/navbar/Navbar"
import Home from "./sections/home/Home"
import Benefits from "./sections/benefits/Benefits"



function App() {
  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  

  return (
    <div className="App ">
      
      <Navbar
     isTopOfPage= {isTopOfPage}
     selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <Home  selectedPage={selectedPage}/>
      <Benefits/>
      </div>
    
    
  )
}

export default App
