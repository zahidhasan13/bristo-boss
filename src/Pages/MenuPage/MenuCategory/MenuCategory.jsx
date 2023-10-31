import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img, subTitle}) => {
    return (
        <div>
            {title && <Cover title={title} img={img} subTitle={subTitle}></Cover>}
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 mt-8 mb-12 max-w-screen-xl mx-auto">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 uppercase border-[#1F2937] mb-4">order your favourite food</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;