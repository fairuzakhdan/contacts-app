import React from "react";
import { getData } from "../utils/data";
import ContactList from "./ContactList";
const ContactApp = () => {
  const contacts = getData();
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
