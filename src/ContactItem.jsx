import React from 'react';
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

const ContactItem = ({ name, tag, url }) => {
  return (
    <div className='contact-item'>
      <ContactItemImage url={url} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
};

export default ContactItem;
