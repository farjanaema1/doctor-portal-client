
import appointment from '../../../../assets/images/appointment.png'

const Contact = () => {
    return (
       <section className="my-16 p-8" style={ { background : `url( ${appointment})`}}>
<div className="text-center">
    <h2 className="font-bold text-accent">Contact Us</h2>
    <p className="text-2xl text-white">Stay Connected With Us</p>
</div>
<div className='text-center'>
<input  type="text" placeholder="Email Address" className="input input-bordered input-warning w-full max-w-xs my-5" /><br />
<input type="text" placeholder="Subject" className="input input-bordered input-warning w-full max-w-xs " />
<br />
<textarea className="textarea w-80 h-24 my-5 textarea-warning" placeholder="Your Message"></textarea>
<br />
<button className="btn btn-outline btn-success">Submit</button>
</div>

       </section>
    )
}
export default Contact;