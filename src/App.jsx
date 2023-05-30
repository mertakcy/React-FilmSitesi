import './App.css'
import {Routes,Route} from 'react-router-dom'
import Add from './components/Add'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Add />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </div>
  )
}

export default App
