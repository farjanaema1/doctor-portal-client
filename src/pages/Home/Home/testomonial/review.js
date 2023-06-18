const Review = ({review}) => {
    const { name,location,img,userReview} = review;
    return(

 <div>

<div className="card w-96 bg-base-100  shadow-xl">
  <div className="card-body">
    
    <p>{userReview}</p>
    <div className="card-actions">
      <img className="w-16 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={img} alt="" />
     <div className="mt-4 ml-4">
     <h2 className="font-bold">{name}</h2>
      
      <h2>{location}</h2>
     </div>
    </div>
  </div>
</div>

 </div>
    )
}
export default Review;