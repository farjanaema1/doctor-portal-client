import qoute from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './review'

const Testomonial = () => {
    const reviews = [
    
    {
        _id : 1,
        name:'Winson herry',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'California',
        img : people1
    },
    {
        _id : 2,
        name:'Winson herry',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'California',
        img : people2
    },
    {
        _id : 3,
        name:'Winson herry',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'California',
        img : people3
    },
]
    return(
<section className="mt-16">

    <div className='flex justify-between'>
        <div>
            <h4 className="text-accent font-bold">Testomonial</h4>
            <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        <figure>
            <img className='lg:w-48 w-24' src={qoute}alt="" />
        </figure>
    </div>
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
        {
            reviews.map ( review => <Review
            
             key={review._id
            }
            review = { review}
            >


            </Review>)
        }
    </div>
</section>
    )
}
export default Testomonial;