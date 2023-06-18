 
 
 import banner from '../../../../assets/images/bg.png'
 
import { DayPicker } from 'react-day-picker';

 const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  

    return(
        <header style={ {background : `url( ${banner})`}} className='mt-32'>
     <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/HzBtZ5v/istockphoto-455237505-170667a.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mr-16'>
     <DayPicker 
       mode="single"
       selected={selectedDate}
       onSelect={setSelectedDate}
     >
     

     </DayPicker>
     {/* <p className='text-accent'>Available service on : { format (selectedDate,'PP')}</p> */}
    </div>
  </div>
</div>
        </header>
    )
}
export  default AppointmentBanner;