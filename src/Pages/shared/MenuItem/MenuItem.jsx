const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="md:flex md:items-center mb-5 md:mb-0">
      <img
        src={image}
        alt=""
        className="md:w-16 md:h-16 lg:w-24 lg:h-24 md:rounded-r-full md:rounded-bl-full rounded-lg"
      />
      <div className="md:mx-6">
        <h3 className="md:text-xl lg:text-2xl text-lg">
          {name} ------------------
        </h3>
        <p className="lg:text-lg text-sm text-[#737373]">{recipe}</p>
      </div>
      <p className="text-2xl text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
