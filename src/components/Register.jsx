import React,{useState} from 'react'
import "./css/style.css"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate,  Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    <div className="signup-box">
       <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
         value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="" />
        
        <label>Email</label>
        <input type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          placeholder="" />
        <label>Password</label>
        <input type="password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="" />
        <label>Phone No</label>
        <input type="text"
         value={phone}
              onChange={(e) => setPhone(e.target.value)}
               placeholder="" />
        <label>Address</label>
        <input type="text" 
         value={address}
         onChange={(e) => setAddress(e.target.value)}
         placeholder="" />

        <label>Sports You Like</label>
        <input type="text" 
         value={answer}
         onChange={(e) => setAnswer(e.target.value)}
         placeholder="" />

        <button type="submit" >
            REGISTER
          </button>
      </form>
      </div>
    <p className="para-2">
      Already have an account? <Link to="/login">Login here</Link>
    </p>
    </>
  )
}

export default Register
