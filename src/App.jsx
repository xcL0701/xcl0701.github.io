import { BrowserRouter } from "react-router-dom"
import { About, Education, Hero, Navbar, Tech, Projects, Contact, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
          <Hero />
        <About />
        <br/><br/><br/>
        <Education />
        <br/><br/><br/><br/><br/><br/>
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <br />
        <Projects />
        <br/><br/><br/><br/><br/>
        <Contact />
        <br/><br/><br/>
      </div>
    </BrowserRouter>
  )
}
export default App
