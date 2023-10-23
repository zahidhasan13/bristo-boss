import SectionTitle from "../../shared/SectionTitle";
import './Features.css'
import featureImg from '../../../assets/home/featured.jpg'

const Features = () => {
    return (
        <div className="features">
            <div className="max-w-screen-xl mx-auto">
            <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 md:items-center space-y-4 md:space-y-0 mx-4 md:mx-0">
        <div>
          <img src={featureImg} alt="" className="w-[600px]"/>
        </div>
        <div className="text-white">
          <p className="text-2xl">March 20, 2023</p>
          <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-0 border-b-4 uppercase border-[#ffffff] text-[#ffffff] mt-4">read more</button>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Features;