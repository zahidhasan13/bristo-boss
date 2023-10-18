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

      <div className="grid grid-cols-3 gap-4 my-8">
        {chefRec.slice(3, 6).map((item) => (
          <div key={item._id} className="bg-[#F3F3F3] pb-4">
            <img src={item.image} alt="" className="w-[400px]"/>
            <div className="text-center mx-14 my-4">
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p>{item.recipe}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-outline border-0 border-b-4 uppercase border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecomands;
