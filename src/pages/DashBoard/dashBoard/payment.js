import { useLoaderData } from "react-router-dom";

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    return (
        <div>
            <h3>payment</h3>
        </div>
    )
}
export default Payment;