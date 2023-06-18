import Banner from "../banner/banner";
import InfoCards from "../infoCards/infoCards";
import Services from "../services/services";
import Care from "./care/care";
import Contact from "./contact/contact";
import MakeAppointment from "./makeappointment/makeAppointment";
import Testomonial from "./testomonial/testomonial";

const Home = () => {
    return (
        <div className="mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testomonial></Testomonial>
            <Contact></Contact>

        </div>
    )
}
export default Home;