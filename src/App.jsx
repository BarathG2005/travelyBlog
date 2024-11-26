import './App.css'
import Nav from './components/nav/nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Contact from './components/pages/Contact'
import {Routes,Route} from'react-router-dom'
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default App
