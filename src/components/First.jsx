import axios from "axios";
import { useEffect } from "react";
const First = () => {
 const login =()=>{
  axios
      .post("http://store.go-clothes.uz:5555/v1/login", {
        email: "xasannosirov094@gmail.com",
        password: "Sehtols@01",
      })
      .then((res) => {
        console.log(res);
      });
 }
 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
    console.log(res)
  })
},[])
  return (
    <div>
      <h1>First components</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, soluta?
        Obcaecati ullam cupiditate amet ad dolores illum, minima perferendis sed
        saepe. Cupiditate optio blanditiis quaerat eius commodi dolore, corporis
        autem.
      </p>
      <h3>http sorov</h3>
      <button onClick={login}>login</button>
    </div>
  );
};

export default First;
