export const Card = ({cardData}) => {
    if(!cardData){
        cardData={
            imageSrc:"https://images.pexels.com/photos/28216688/pexels-photo-28216688.png",
            title: "Title Not Determined",
            description:  "Place Your Description Here"
        }
    }
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={cardData.imageSrc}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardData.title}</h2>
          <p>
            {cardData.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
