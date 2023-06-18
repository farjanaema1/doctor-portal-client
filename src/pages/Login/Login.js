

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authProvider";
import SocialLogIn from "../shared/socialLogin/socialLogin";


const LogIn = () => {
  const {signIn} = useContext(AuthContext);
  const[logInError,setLogInError] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit,formState:{errors} } = useForm();
    // const [data, setData] = useState("");
    const handleLogIn = (data) => {
      console.log(data);
      setLogInError('')
      signIn(data.email,data.password)
      .then(result => {
        const user = result.user;
       // console.log(user);
        navigate(from,{replace:true});
      })
      .catch( error => {
        console.log(error.message)
        setLogInError(error.message)
      })
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
<div className="w-96">
    <h2 className="text-2xl text-center font-bold text-accent">LogIn</h2>
    <form onSubmit={handleSubmit(handleLogIn)}>
   
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text ">Email</span>
  
    
  </label>
  
  <input  type="email" {...register("email",{
    required:"email address required"
  })} className="input input-bordered w-full" placeholder="Email" />
</div>
<div className="form-control w-full ">
{errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
  <label className="label">
    <span className="label-text">Password</span>
  
    
  </label>
  
  <input  type="password" {...register("password",{
    required:"password must be 6 character long",minLength:{value:6}
  })} className="input input-bordered w-full" placeholder="Password" />
  {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
  

</div>
      <input type="submit" className="btn mt-4 w-full" />
      {logInError && <p>{logInError}</p>}
    </form>
    <p className="mt-4">New to Doctor's Portal? <Link className="text-success" to="/signup">SignUp</Link></p>
    <div className="divider">OR</div>
 <div className="ml-2">
 <SocialLogIn></SocialLogIn>
 </div>

</div>

        </div>
    )
}
export default LogIn;