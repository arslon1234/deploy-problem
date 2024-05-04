import React from 'react'
import useAuthStore from '../../store/auth'
export default function Register() {
    const {register} = useAuthStore()
    const save =(e)=>{
        e.preventDefault();
        register({
            full_name: e.target[0].value,
            username: e.target[1].value,
            password: e.target[2].value,
        })
    }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={save}>
        <input type="text" placeholder='full_name'/>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}
