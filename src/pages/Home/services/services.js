import Service from "./service";

import anginaPectoris from '../../../assets/images/anginaPectoris.jpg'
import heartValve from '../../../assets/images/heratValve.jpg'
import heartInfection from '../../../assets/images/heartInfection.jpg'
import heartFailure from '../../../assets/images/heartFailure.jpg'
import arrhythmia from '../../../assets/images/arrhythmia.jpg'


const Services = () => {
   const serviceData = [
      {
         id :1,
         name : 'Angina Pectoris ',
         description : 'Open at 9.00 am to 5.00pm',
         icon : anginaPectoris,
        // bgClass : ' bg-gradient-to-r from-success to-accent'
     },
     {
         id :2,
         name : 'Heart Valve Disease',
         description : 'Brooklyn, NY 10036, United States',
         icon :  heartValve,
        // bgClass : ' bg-neutral'
     },
     {
         id :3,
         name : 'Heart Infection',
         description : '00987567758',
         icon :  heartInfection
       
     },
     {
         id :4,
         name : 'Heart Failure',
         description : '00987567758',
         icon : heartFailure
       
     },
     {
         id :5,
         name : 'Arrhythmia',
         description : '00987567758',
         icon : arrhythmia
       
     },
   ]
   return (
      <section className="mt-16">
         <div>
    <h2 className="text-xl text-accent text-center font-bold">OUR SERVICES</h2>
    
        <h3 className="text-3xl text-center">SERVICES WE PROVIDE</h3>
         </div>

         
       <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-16'>
    {
       serviceData.map( service => <Service
       key={service.id}
       service = {service}
       
       ></Service>)
    }
       </div>
      </section>
   )
}
export default Services;