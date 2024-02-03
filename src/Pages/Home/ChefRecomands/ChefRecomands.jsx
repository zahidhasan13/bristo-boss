import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import FoodCard from "../../../components/foodCard";

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
    <section className="max-w-screen-xl mx-auto mb-8 px-4">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 my-8">
        {chefRec.slice(3, 6).map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecomands;
