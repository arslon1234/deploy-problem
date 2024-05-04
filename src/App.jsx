import { Route, Routes } from 'react-router-dom'
import First from './components/First'
import Second from './components/Second'
export default function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='second' element={<Second/>}/>
    </Routes>
    </div>
  )
}
