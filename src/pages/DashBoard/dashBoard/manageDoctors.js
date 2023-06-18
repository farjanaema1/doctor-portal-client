import { useQuery } from "react-query";
import Loading from "../../shared/loading/loading";
import { useState } from "react";
import ConfirmationModal from "../../shared/confirmationModal/confirmationModal";
import banner from '../../../assets/images/bg.png'




    
    const ManageDoctors = () => {
      const {data: doctors,isLoading,refetch} = useQuery({
        queryKey:['doctors'],
        queryFn : async() => {
            try{
                const res = await fetch('http://localhost:5000/doctors',{
                    headers:{
                        'content-type':'application/json'
                       
                    }
                });
                const data = await res.json();
                return data 
            }
            catch(error){

            }

        }
    })
      const[deleteDoctor,setDeleteDoctor] = useState(null);
      const closeModal = () => {
        setDeleteDoctor(null)
      }
      // const handleDeleteDoctor = id => {
      //   //console.log(doctor);
      //   fetch(`http://localhost:5000/doctors/${id}`,{
      //     method:'DELETE',
      // headers:{
      //   'content-type':'application/json'
      // }
      //   })
      //   .then(res => res.json())
      //   .then( data => {
      //     console.log(data)
      //     refetch();
      //   })
  
      // }
    if(isLoading) {
        <Loading></Loading>
    }
    return (
        <div style={ { background : `url( ${banner})`,padding:15}}>
            <h2 style={{
    color:'Gray'
  }} className="text-xl font-bold mb-16">Total Doctors :{doctors?.length}</h2>
  <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
      <th></th>
        <th>Avatar</th>
        
        <th>Email</th>
       <th>Name</th>
        {/* <th>Action</th>
         */}
        
      </tr>
    </thead>
    <tbody>
      
    {
        doctors?.map( (doctor,i) => <tr
    
        >
            <th>
             {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  
                
                </div>
              </div>
            </td>
            <td className="text-primary font-bold">
            {doctor.email}
            </td>
            <td>{doctor.name}</td>
            <td>{doctor.specialty}</td>
            {/* <th>
            <label  onClick={ () => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error" >Delete</label>
              
            </th> */}
          </tr>)}
    
      
     
    </tbody>
    
  
    
  </table>
</div>
{
deleteDoctor && <ConfirmationModal

title = {`Are you sure to delete?`}
message = {`....`}
// successAction = {handleDeleteDoctor}
succesaButtonName = "Delete"
closeModal = {closeModal}
modalData = {deleteDoctor}
>

</ConfirmationModal>
}
        </div>
    )
}
export default ManageDoctors;