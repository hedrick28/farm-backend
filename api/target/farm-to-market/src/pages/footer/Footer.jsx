import React from "react";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom f-bg-primary-footer">
      <div className="container-fluid text-white justify-content-center">
        Makipag-ugnayan sa FarmToMarket&nbsp;&nbsp;&nbsp;&nbsp;Tel. No.: (+632)
        8-888-7000 &nbsp;&nbsp;&nbsp;Cell. No.: 0916-3412345&nbsp;&nbsp;&nbsp;
        Email Address: farmToMarket@gmail.com
      </div>
      <div className="container-fluid text-white justify-content-center">
        {" © "}
        {new Date().getFullYear()} FarmToMarket - All right reserved
      </div>
    </nav>
  );
};

export default Footer;
