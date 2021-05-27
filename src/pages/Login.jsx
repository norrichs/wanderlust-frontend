import React,{useState} from 'react'

const Login = () => {
const [fordata, setFormData]= useState({username:'',password:'',})


const handleChange = (e)=>{
 e.preventDefault()
   console.log(e.target.value)
}

  return (
    <form>
      <input type="text" 
      placeholder='username'
      onChange={handleChange}
      />
      <input type="text"
      onChange={handleChange}
       placeholder='password'
       />
    </form>
  )
}

export default Login
