import NavBar from "./components/NavBar";
import Hero from "./components/Hero"
import KeyFeatures from "./components/KeyFeatures"
import BassShaker from "./components/BassShaker"
import NewFeatures from "./components/NewFeatures"
import Footer from "./components/Footer";

import "./index.css";
import '../fontawesome'; 




function App() {

  return (
    <div className="bg-sm-gradient overflow-x-hidden" >
      <div>
        <div className='max-w-7xl m-auto px-8 sm:px-6'>
          <NavBar />
          <Hero />
          <KeyFeatures  />
          <BassShaker  />
          <NewFeatures  />
        </div>
      </div>
      <div> 
        <Footer />
        </div>
    </div>
  )
}

export default App
