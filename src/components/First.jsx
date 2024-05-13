import { useEffect } from "react"
import axios from "axios"
const First = () => {
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div>
      <h1>First components</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, soluta? Obcaecati ullam cupiditate amet ad dolores illum, minima perferendis sed saepe. Cupiditate optio blanditiis quaerat eius commodi dolore, corporis autem.
      </p>
      <h3>http sorov</h3>
    </div>
  )
}

export default First
