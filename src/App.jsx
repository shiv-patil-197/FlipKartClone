import Flipkart from './Flipkart/Flipkart'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './Flipkart/Section1/Login'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Flipkart/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
