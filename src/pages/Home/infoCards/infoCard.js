const InfoCard = ({card}) => {
    const { name,id,description,bgClass,icon} = card;

    return (
        <div>
            <div className={`card card-side bg-base-100 text-white p-5 shadow-xl${bgClass}`}>
            
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
    
        </div>
    )
}
export default InfoCard;