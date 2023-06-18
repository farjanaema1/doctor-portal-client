import { Link } from "react-router-dom";

const Service = ({service}) => {
    const { name,id,description,icon} = service;

    return (
            <div>
        <div style={{
          height:400,
          backgroundColor:'lightyellow'
        }} className="card w-96  p-5 shadow-xl">
        <figure><img  style={{
          height:200
        }} src={icon} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center ml-16">{name}</h2>
          <Link to='/appointment'>
     <button style={{border:0}} className="btn btn-primary bg-gradient-to-r from-primary to-secondary ml-12 mt-4">Get Appointment</button>
     </Link>
         
        </div>
      </div>
      </div>
      
       
    )
}
export default Service;