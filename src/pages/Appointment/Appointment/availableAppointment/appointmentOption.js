const AppointmentOption = ({appointmentOption,setTreatment}) => {
    const{name,slots,price} = appointmentOption;


    return (
        <div>
    <div  className="card  shadow-xl ">
  <div className="card-body">
    <h2 className="text-center text-2xl font-bold text-primary">{name}</h2>
    <p className="text-center">{slots.length > 0? slots[0] : 'try-another day'}</p>
    <p className="text-center">{slots.length} { slots.length > 1? 'spaces' : 'space' } available </p>
    <p className="text-xl text-center">${price}</p>
    <div className="card-actions justify-center">
     
     
      <label style={{
        border:0
      }}
       onClick={ () => setTreatment(appointmentOption)}
      
      htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
    </div>
  </div>
</div>
        </div>
    )
}
export default AppointmentOption;