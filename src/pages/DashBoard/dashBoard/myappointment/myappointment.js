import { useContext } from "react";
import { AuthContext } from "../../../../context/authProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`
    const {data: booking = []} = useQuery({
        queryKey:['booking',user?.email],
        queryFn:async() => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (

       <section style={{
        backgroundColor:'darkcyan',
        padding:10
       }}>
         <div>
         <h3 className="text-3xl text-warning">My Appointment</h3>

         <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        {/* <th>Payment</th> */}
      </tr>
    </thead>
    <tbody>
    {
        booking.map((book,i) => <tr>
            <th>{i+1}</th>
            <td>
                {book.patientName}
            </td>
            <td>
                {book.treatmentName}
            </td>
            <td>
                {book.selectedDate}
            </td>
            <td>
                {book.slot}
            </td>
            {/* <td>
                {
                    book.price && !book.paid &&
                    <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className="btn  btn-primary">Pay</button>
                    </Link>
                }
            </td> */}
        </tr>)
    }
      
    </tbody>
  </table>
</div>
        </div>
       </section>
    )
}
export default MyAppointment;