import React from "react";
// import BsFacebook from "react-icons/bs";
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

const HeaderTop = () => {
  return (
    <div className="d-md-flex justify-content-md-around align-items-md-center py-2" style={{backgroundColor: "black"}}>
      <div className="m-0">
        <p className="text-white text-uppercase fw-bold fs-6 m-0 ">Call us +8801811877477</p>
      </div>
      <div>
        <BsFacebook className="text-light fs-5 me-2"></BsFacebook>
        <AiOutlineInstagram className="text-light fs-4 me-2"></AiOutlineInstagram>
        <AiFillYoutube className="text-light fs-4"></AiFillYoutube>
      </div>
    </div>
  );
};

export default HeaderTop;
