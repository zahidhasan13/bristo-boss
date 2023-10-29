import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecomands from "./ChefRecomands/ChefRecomands";
import CoverBG from "./CoverBG/CoverBG";
import Features from "./Features/Features";
import Menu from "./Menu/Menu";
import Tesimonial from "./Testimonial/Tesimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <CoverBG></CoverBG>
      <Menu></Menu>
      <CallUs></CallUs>
      <ChefRecomands></ChefRecomands>
      <Features></Features>
      <Tesimonial></Tesimonial>
    </div>
  );
};

export default Home;
