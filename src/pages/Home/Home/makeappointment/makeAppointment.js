import doctor from '../../../../assets/images/doctor.png';
import appointment from '../../../../assets/images/appointment.png'
import { Link } from 'react-router-dom';
const MakeAppointment = () => {
    return (
        <section className='mt-32' style={ { background : `url( ${appointment})`}}>
            <div className="hero mt-32">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className=" lg:w-1/2 -mt-32 lg:block hidden rounded-lg " />
          <div className='ml-8'>
            <h1 className='font-bold text-success'>Appointment</h1>
            <h1 className="text-5xl font-bold text-white">Make an appointment today</h1>
            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <Link to='/appointment'>
           <button style={{
            border:0
           }} className="btn btn-primary bg-gradient-to-r from-success to-accent">Get Started</button></Link>
          </div>
        </div>
      </div>
        </section>
    )
}
export default MakeAppointment;