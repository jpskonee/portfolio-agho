import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.3245583991!2d3.0037633095566476!3d6.547977480168733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1624304593543!5m2!1sen!2sng"
        frameBorder="0"
        title="googleMapNew1"
        style={{ border: "0", width: "100%", height: "290px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
