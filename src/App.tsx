import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import { SelectedPage } from "./shared/types"



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
    <div className="App bg-gray-20">
      
      <Navbar
     isTopOfPage= {isTopOfPage}
     selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <Home selectedPage={selectedPage}/>
      </div>
    
    
  )
}

export default App
