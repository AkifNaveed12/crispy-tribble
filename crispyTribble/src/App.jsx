import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Favorite from './pages/favorites/Favorites'

function App() {

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          
          {/* page routes */}
          <Route path ='/' element={ <Home/> }/>
          <Route path ='/favorites' element={ <Favorite/> }/>
          <Route path ='/recipe-item/:id' element={ <Details/> }/>

        </Routes>
      </div>
    </div>
  )
}

export default App
