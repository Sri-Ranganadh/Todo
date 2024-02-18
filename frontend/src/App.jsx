import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {DisplayTodo} from './pages/DisplayTodo'
import { CreateTodo } from './pages/CreateTodo'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/displayTodo' element={<DisplayTodo/>} />
      <Route path ='/createTodo' element={<CreateTodo/>} />
    </Routes>
  </BrowserRouter>
}

export default App
