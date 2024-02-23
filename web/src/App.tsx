
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Add } from './pages/add'
import { Hero } from './pages/hero'
import { Show } from './pages/show'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero /> }/>
          <Route path='/add' element={<Add /> }/>
          <Route path='/show' element={<Show /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
