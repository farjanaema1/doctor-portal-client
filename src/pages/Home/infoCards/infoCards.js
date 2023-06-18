
 import clock from '../../../assets/icons/clock.svg';
 import marker from '../../../assets/icons/marker.svg';
 import phone from '../../../assets/icons/phone.svg';
import InfoCard from './infoCard';

const InfoCards = () => {
    const cardData = [
        {
            id :1,
            name : 'Opening hour',
            description : 'Open at 9.00 am to 5.00pm',
            icon : clock,
            bgClass : ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            id :2,
            name : 'Visit our location',
            description : 'Brooklyn, NY 10036, United States',
            icon : marker,
            bgClass : ' bg-neutral'
        },
        {
            id :3,
            name : 'Contact us now',
            description : '00987567758',
            icon : phone,
            bgClass : ' bg-gradient-to-r from-secondary to-accent'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16'>
     {
        cardData.map( card => <InfoCard
        key={card.id}
        card = {card}
        
        ></InfoCard>)
     }
        </div>
    )
}
export default InfoCards;