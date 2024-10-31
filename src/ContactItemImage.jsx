import React from "react";
const ContactItemImage = ({ url }) => {
  return (
    <div className="contact-item-image">
      <img src={url} alt="image-contact" className="contact-item-avatar" />
    </div>
  );
};

export default ContactItemImage;
