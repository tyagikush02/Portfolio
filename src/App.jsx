import NavBar from './components/NavBar'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Internship/>
      <Projects/>
      <Contact/>
      <p>CopyRight&copy; 2024. ALL Right Reserved</p>
    </>
  )
}

export default App
