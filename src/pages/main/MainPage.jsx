import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Books from './Books'
import Authors from './Authors'
import Genre from './Genre'

export default function MainPage() {
  const [id, setId] = useState('1')
  const [main,setMain] = useState([
    {id: 1, component: <Books/>},
    {id: 2, component: <Authors/>},
    {id: 3, component: <Genre/>},
  ])
  useEffect(()=>{
    setId(localStorage.getItem("id"))
    console.log(id, 'id...')
  },[])
  return (
    <div className='container-fluid'>
        <div className="row">
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
          {
            main.filter(item => item.id == id).map((item,index)=>{
              return item.component
            })
          }
          </div>
        </div>
    </div>
  )
}
