import React,{ useState }from 'react'

const Signup = () => {
  const [name, setusername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
        console.log("Signup email:",email,"password",password)
    }
  return (
    <div>
      
      <div  style={{flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, display:"flex"}}>
      <h2>Signup</h2>
      
      <form onSubmit={handleSignup} style={{flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, display:"flex"}}>
      <input style={{width:"300px"}}type="name" placeholder="Enter Username" value={name} onChange={(e) => setusername(e.target.value)} required/><br></br>
        <input style={{width:"300px"}}type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br></br>
        <input style={{width:"300px"}}type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br></br>
        <input style={{width:"300px"}}type="password" placeholder="Enter confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <button style={{width:"100px"}} varient='contained'className='button' type="submit" >Submit</button>
       </form>
       </div>
    </div>
  )
}

export default Signup
