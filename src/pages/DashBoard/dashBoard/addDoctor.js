import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../shared/loading/loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";



const AddDoctor = () => {
  const imageHostKey = 'edbefae8b1684b3f3845c1c1b7ba3b43';
 const navigate = useNavigate();

    const { register, handleSubmit,formState:{errors} } = useForm();
    const{data:specialties,isLoading} = useQuery({
        queryKey : ['specialty'],
        queryFn : async() => {
            const res = await fetch('http://localhost:5000/appointmentspecialty');
            const data = await res.json();
            return data;

        }
    })
    const handleAddDoctor = data => {

        //console.log(data)
        const image = data.image[0];
       // console.log(data.image[0])
       const formData = new FormData();
       formData.append('image',image);
       const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
       fetch(url,{
        method:'POST',
        body:formData
       })
       .then(res => res.json())
       .then( imgData => {
        console.log(imgData);
        if(imgData.success) {
          console.log(imgData.data.url)
        }
        const doctor = {
          name:data.name,
          email:data.email,
          specialty:data.specialty,
          image:imgData.data.url
        }
        fetch(`http://localhost:5000/doctors`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then( result => {
          console.log(result);
          toast.success(`${doctor.name} is added successfully`);
          navigate('/dashboard/managedoctors');
          
        })
      
      
      
       } )

      }
   
    if(isLoading) {
        return <Loading></Loading>
    }
    return (
       <section className="flex">
         <div className="w-96 p-7">
           
           <form onSubmit={handleSubmit(handleAddDoctor)}>
          
          <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Name</span>
        
          
        </label>
        
        <input  type="text" {...register("name",{
          required:"Name is  required"
        })} className="input input-bordered w-full bg-red-100" placeholder="Name" />
       </div>
       <div className="form-control w-full ">
       {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
        <label className="label">
          <span className="label-text">Email</span>
        
          
        </label>
        
        <input  type="email" {...register("email",{
          required:"email address required"
        })} className="input input-bordered w-full bg-blue-100" placeholder="Email" />
       </div>
       <div className="form-control w-full ">
       {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
        <label className="label">
          <span className="label-text">Specialty</span>
        
          
        </label>
        <select className="select select-bordered bg-orange-100 w-full max-w-xs">
         <option  selected>pick a specialty</option>
        
        {
           specialties.map( specialty =>  <option 
           key = { specialty._id}
           value={specialty.name}
           
           >{specialty.name}</option>)
        }
       </select>
       <label className="label">
          <span className="label-text">Photo</span>
        
          
        </label>
        
        <input  type="file" {...register("image",{
          required:"image required"
        })} className="input input-bordered p-2 bg-yellow-100 w-full" placeholder="photo" />
        
       </div>
            <input type="submit" className="btn  w-full mt-5" />
          </form>
               </div>
               <div>
                <img className="ml-16 mt-32" src="https://i.ibb.co/25rFBzL/images-12.jpg" alt="" />
               </div>
       </section>
    )
}
export default AddDoctor;