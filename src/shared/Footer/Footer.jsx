import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer p-10 bg-black text-white">
        <div>
          <img className="w-20 h-25 mb-10 rounded-2xl" src={logo} alt="" />
          <p>
           Toy Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/toys' className="link link-hover">All Toys</Link>
          
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
            <SocialIcon></SocialIcon>
        </div>
        
      </div>
      </div>
      <p className="bg-black text-white text-center">
        © 2023 Good Dolls. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
