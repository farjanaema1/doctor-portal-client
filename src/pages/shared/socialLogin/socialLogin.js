import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider";



const SocialLogIn = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn()
        .then( result =>{
            const user =  result.user;
            console.log(user);
            const currentUser ={
                email : user.email

            }
        })


    }
    return (
        <div>
   {/* <p style={{
    color:'darkcyan'
   }} className="text-center">Social LogIn</p> */}
   <p>
    <button onClick={handleGoogleLogin} className="btn w-4/5 btn-outline mb-4 text-center w-full"> SignIn with Google</button>
   </p>
        </div>
    )
}
export default SocialLogIn;