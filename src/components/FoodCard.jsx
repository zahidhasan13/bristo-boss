
const FoodCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-8">
            <figure className="">
              <img
                src={item.image}
                alt={item.name}
                className="w-[400px]"
              />
            </figure>
            <p className="absolute right-4 top-4 bg-black px-4 py-2 rounded-xl">${item.price}</p>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 uppercase border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">add to cart</button>
              </div>
            </div>
          </div>
    );
};

export default FoodCard;