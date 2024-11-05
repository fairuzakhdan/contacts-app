import React from 'react';
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from './DeleteButton';

const ContactItem = ({ name, tag, url,onDelete,id }) => {
  return (
    <div className='contact-item'>
      <ContactItemImage url={url} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
};

export default ContactItem;
