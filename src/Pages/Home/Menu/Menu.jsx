import SectionTitle from "../../shared/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-screen-xl mx-auto mb-8 px-4">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 mt-8 mb-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase border-[#1F2937]">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
