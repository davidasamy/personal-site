import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">main</Link><Link to="/Work">work</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
