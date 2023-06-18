import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider";
import { toast } from "react-hot-toast";


const BookingModal = ({treatment,selectedDate,setTreatment,refetch}) => {
    const{user} = useContext(AuthContext);
    const {name,slots,price} = treatment;
    const date = format(selectedDate,'PP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            selectedDate : date,
            patientName : name,
           treatmentName : treatment.name,
            email,phone,slot,price
        }
        console.log(booking);
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then( data => 
            { 
console.log(data)
                if(data.acknowledged){
                    setTreatment(null);
                    toast.success('Booking confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
               
            }) 



       

    }
   
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">


   <input type="text" value={date} className="input input-bordered input-info w-full" />
   <select
  
   
   name="slot" className="select select-bordered w-full">
    {
        slots.map( (slot,i) => <option
        
        value={slot}
        key = {i}
        
        >{slot}</option> )
    }
  
  
</select>
   <input type="text" name="name"   placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full " />
   <input type="email" name="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-info w-full " />
   <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-info w-full" />
   <input type="submit"  className="btn"/>
   </form>
  </div>
</div>
        </>
    )
}
export default BookingModal;