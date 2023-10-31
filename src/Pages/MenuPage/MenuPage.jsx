import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuBG from "../../assets/menu/banner3.jpg";
import dessertBG from "../../assets/menu/dessert-bg.jpeg";
import saladBG from "../../assets/menu/salad-bg.jpg";
import pizzaBG from "../../assets/menu/pizza-bg.jpg";
import soupBG from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../shared/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const MenuPage = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBG}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title="dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertBG}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaBG}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladBG}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupBG}
      ></MenuCategory>
    </div>
  );
};

export default MenuPage;
