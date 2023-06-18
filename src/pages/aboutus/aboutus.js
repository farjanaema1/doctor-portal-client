import Doctor from "./doctor";

const AboutUs = () => {
  const doctorData = [
    {
       id :1,
       name : 'Dr. Siddique ',
       description : 'Beta-Blocker Therapy',
      img : "https://i.ibb.co/8dhNGrm/istockphoto-177373093-612x612.jpg"
   },
   {
       id :2,
       name : 'Dr. Chowdhury',
       description : 'ACE Inhibitors',
       img : "https://i.ibb.co/1mW4jL3/360-F-295518052-a-O5d9-Cq-Rh-Pnjl-NDTRDj-KLZHNftqfsxz-I.jpg"
     
   },
   {
       id :3,
       name : 'Dr. Watson',
       description : 'Angiotension',
       img : "https://i.ibb.co/7k0f8Ng/depositphotos-322579018-stock-photo-smiling-doctor-standing-on-grey.webp"
      
     
   },
   {
       id :4,
       name : 'Dr. william',
       description : 'Calcium Channel Blocker Drugs',
      img : "https://i.ibb.co/pzPM2vp/unnamed.jpg"
     
   },
   {
       id :5,
       name : 'Dr. Harry',
       description : 'Antiarrhythmics',
      img : "https://i.ibb.co/Wz13TDk/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
     
   },
   {
       id :6,
       name : 'Dr. Winson',
       description : 'Aspirin Therapy',
      img : "https://i.ibb.co/LrPwCz6/360-F-260040863-f-Yx-B1-Snrzg-J9-AOkc-T0hoe7-IEFts-Pi-HAD.jpg"
     
   },
 ]
    return (
        <div>
            <div className="hero mt-16">
             <div className="hero-content">
    <div className="text-center lg:text-left">
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary">
  <div className="collapse-title text-xl font-medium flex">
    Why Choose Us? 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="1.2em" viewBox="0 0 640 512"><path d="M0 24C0 10.7 10.7 0 24 0H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24zM0 488c0-13.3 10.7-24 24-24H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM83.2 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4c-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32zm461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32H493.6zM391.2 290.4c32.1 7.4 58.1 30.9 68.9 61.6c3.5 10 5.5 20.8 5.5 32c0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32c0-11.2 1.9-22 5.5-32c10.5-29.7 35.3-52.8 66.1-60.9c7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7 .8 21.6 2.4zm44-130.4a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM321.6 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
  </div>
  <div className="collapse-content"> 
    <p> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary">
  <div className="collapse-title text-xl font-medium flex">
 Where We Located <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="1.2em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  </div>
  <div className="collapse-content"> 
    <p>  Email : doctorsportal@gmail.com <br />
Phone : ++0087946573 <br />
Address : 99/cda/badda-USA</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary">
  <div className="collapse-title text-xl font-medium flex">
  Service We Provide 
  <svg xmlns="http://www.w3.org/2000/svg"  className="ml-2" height="1.2em" viewBox="0 0 496 512"><path d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z"/></svg>
  </div>
  <div className="collapse-content"> 
    <p>Beta-Blocker Therapy <br />
    
    ACE Inhibitors
    <br />
    Angiotension <br />Calcium Channel Blocker Drugs</p>
  </div>
</div>
</div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-32">
     <img style={{height:300}} src="https://i.ibb.co/Wk8Kg4p/cartoon-couple-doctors-waving-free-vector.jpg" alt="" />
    </div>
  </div>
</div>

<div className="w-4/5 mx-auto text-center mt-10">
  <h1 style={{
    color:'pink'
  }} className="text-3xl font-bold">See our Doctor Pannel</h1>
   <div  className="stats shadow mt-6">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Doctors</div>
    <div className="stat-value">1K</div>
    <div className="stat-desc">Jan 1st - Dec 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Services</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
</div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-16 mb-10'>
    {
       doctorData.map( doctor => <Doctor
       key={doctor.id}
       doctor = {doctor}
       
       ></Doctor>)
    }
       </div>
        
        </div>
    )
}
export default AboutUs;