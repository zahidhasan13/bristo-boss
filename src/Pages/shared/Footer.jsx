import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2">
        <div className="bg-[#1F2937] py-20 text-center">
          <h3 className="text-3xl uppercase mb-8">contact us</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] py-20 text-center">
            <h3 className="text-3xl uppercase mb-8">follow us</h3>
            <p>Join us on social media</p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-xl">
                <Link to=''><FaFacebookF></FaFacebookF></Link>
                <Link to=''><FaInstagram></FaInstagram></Link>
                <Link to=''><FaTwitter></FaTwitter></Link>
            </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
