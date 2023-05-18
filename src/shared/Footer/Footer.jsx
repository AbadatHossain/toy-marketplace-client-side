import logo from "../../assets/logo.jpg";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <footer>
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
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <SocialIcon></SocialIcon>
      </div>
      <p className="bg-black text-white text-center">
        © 2023 Good Sports. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
