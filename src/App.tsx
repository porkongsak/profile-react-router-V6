import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './page/Home'
import { About } from './page/About'
import { Contact } from './page/Contact'
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
              <Route path="" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App
