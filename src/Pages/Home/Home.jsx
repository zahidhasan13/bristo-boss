import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecomands from "./ChefRecomands/ChefRecomands";
import CoverBG from "./CoverBG/CoverBG";
import Menu from "./Menu/Menu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CoverBG></CoverBG>
            <Menu></Menu>
            <CallUs></CallUs>
            <ChefRecomands></ChefRecomands>
        </div>
    );
};

export default Home;