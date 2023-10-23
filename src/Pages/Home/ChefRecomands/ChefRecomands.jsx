import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";

const ChefRecomands = () => {
  const [chefRec, setChefRec] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecomand = data.filter((item) => item.category === "salad");
        setChefRec(chefRecomand);
      });
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto mb-8">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 my-8 mx-4 md:mx-0">
        {chefRec.slice(3, 6).map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl mb-8">
            <figure className="">
              <img
                src={item.image}
                alt={item.name}
                className="w-[400px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 uppercase border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecomands;
