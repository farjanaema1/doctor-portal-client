import { format } from "date-fns";
import {  useState } from "react";
import BookingModal from "../../bookingModal/bookingModal";
import AppointmentOption from "./appointmentOption";
import { useQuery } from "react-query";
import Loading from "../../../shared/loading/loading";

const AvailableAppointment = ({selectedDate,setSelectedDate}) => {
    // const[appointmentoptions,setAppointmentoptions] =useState([]);
    const[treatment,setTreatment] = useState(null);
    const date = format(selectedDate,'PP')
   const { data:appointmentOptions = [],refetch,isLoading} = useQuery({
    queryKey: ['appointmentOptions',date],
    queryFn : async() => {
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        const data = await res.json();
        return data;
    }
   })
//     useEffect( () => {
// fetch('')

// .then( data => setAppointmentoptions(data))
//     },[])
if(isLoading){
    return <Loading></Loading>
}
    return (
        <section className="mt-16 mb-16">
            <div>
        <p style={{
            color:'darkcyan'
        }} className=' text-center font-bold'>Available service on : { format (selectedDate,'PP')}</p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                appointmentOptions.map ( option => <AppointmentOption
                
                    key={option._id}
                    appointmentOption = {option}
                    setTreatment = {setTreatment}
                >


                    
                </AppointmentOption>)
            }
        </div>
      {
        treatment &&
        <BookingModal 
        
        treatment = {treatment}
        selectedDate = {selectedDate}
        setTreatment = {setTreatment}
        refetch = {refetch}
        
        >


        </BookingModal>
      }
        </section>
        
    )
}
export default AvailableAppointment;