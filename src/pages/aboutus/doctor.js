

const Doctor = ({doctor}) => {
    const { name,id,img,description} = doctor;
    return (
        <div>
 <div style={{
         height:500,
          backgroundColor:''
        }} className="card w-96  p-5 shadow-xl">
        <figure><img style={{
            height:350
        }} src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center ml-16">{name}</h2>
          <h2 className="text-primary font-bold ml-16"> specialty : {description}</h2>
          {/* <Link to='/appointment'>
     <button style={{border:0}} className="btn btn-primary bg-gradient-to-r from-primary to-secondary ml-12">Get Appointment</button>
     </Link> */}
         
        </div>
      </div>
        </div>
    )
}
export default Doctor;