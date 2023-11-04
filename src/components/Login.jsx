import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate( "/");
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
        <div class="login-box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
          
          <button type="submit" >
            LOGIN
          </button>
        </form>
      </div>
   </>
  );
};

export default Login;