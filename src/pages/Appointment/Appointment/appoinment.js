
import { useState } from "react";
import AppointmentBanner from "./appoinmentBanner/appointmentBanner";
import AvailableAppointment from "./availableAppointment/availableAppointment";

    
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState( new Date());
    return(
        <div>
   <AppointmentBanner selectedDate={selectedDate}
   setSelectedDate={setSelectedDate}
   ></AppointmentBanner>
   <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    )
}
export  default Appointment;