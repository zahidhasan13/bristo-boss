
const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="flex items-center">
            <img src={image} alt="" className="w-28 h-28 rounded-r-full rounded-bl-full"/>
            <div className="mx-6">
                <h3 className="text-2xl">{name} ------------------</h3>
                <p className="text-lg text-[#737373]">{recipe}</p>
            </div>
            <p className="text-2xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;