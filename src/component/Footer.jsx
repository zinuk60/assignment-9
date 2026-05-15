import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
    return (
        <div className=" bg-base-300 p-10 mt-10">
           <footer className="footer sm:footer-horizontal  text-base-content">
  <aside>
     <p className='font-bold text-3xl text-green-600'>Green<span className='text-[#1eea5f] text-4xl'>Nest</span></p>
  </aside>
           

  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className=" link-hover" to="/about">About</Link>
    <Link className=" link-hover" to="/contact">Contact</Link>
    <Link className=" link-hover" to="/privacy-policy">Privacy Policy</Link>
   
  </nav>
  <nav>
    <h6 className="footer-title">Get In Touch</h6>
  <div className="flex gap-4">
    
    <Link className=" link-hover text-2xl" to="/facebook.com"><FaFacebook></FaFacebook></Link>
    <Link className=" link-hover text-2xl" to="/instagram.com"><FaInstagram></FaInstagram></Link>
    <Link className=" link-hover text-2xl" to="/pinterest.com"><FaPinterest></FaPinterest></Link>
  </div>
  </nav>

</footer>  
<p className="text-center mt-10 text-gray-500">© 2025 GreenNest. All rights reserved.</p>
        </div>
    );
};

export default Footer;