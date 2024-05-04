
import useAuthStore from '../../store/auth'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const {login} = useAuthStore()
    const navigate = useNavigate()
    const save = async(e)=>{
        e.preventDefault();
       await login({
            username: e.target[0].value,
            password: e.target[1].value,
        })
       let token = localStorage.getItem("token")
       if(token){
        navigate("/books")
       }
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={save}>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}
