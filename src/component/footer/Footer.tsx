import { NavLink } from "react-router-dom"
import logoImageWhite from "../../assets/logoimagefooter.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";


const Footer = () => {
  return (
    <>
     <div className="flex flex-col bg-black">
       <div className="text-white flex flex-row justify-center mt-4">
        <h2>Join Our Channel</h2>
        </div>

        <div className="flex flex-row gap-3 justify-center mt-4">
      <a href="https://www.facebook.com/natgeo/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={30} color="white" />
      </a>
      <a href="https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A" target="_blank" rel="noopener noreferrer">
        <CiYoutube size={30} color="white" />
      </a>
      <a href="https://www.instagram.com/natgeo/" target="_blank" rel="noopener noreferrer">
        <CiInstagram size={30} color="white" />
      </a>
      <a href="https://www.tiktok.com/@natgeo" target="_blank" rel="noopener noreferrer">
        <PiTiktokLogoThin size={30} color="white" />
      </a>
    </div>

    </div>
     <footer className="flex flex-row bg-black text-white p-5 tex gap-10 justify-center">
      <div className="flex flex-row ">
        <NavLink to="/articles">
          <img className=" h-12" src={logoImageWhite} />
        </NavLink>
      </div>
      <div className="flex flex-col justify-center">
        Copyright © 1996-2015 National Geographic SocietyCopyright © 2015-2024 National Geographic Partners, LLC. All rights reserved
      </div>
    </footer>
    </>
   
  )
}

export default Footer
