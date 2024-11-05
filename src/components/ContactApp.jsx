import React from "react";
import { getData } from "../utils/data";
import ContactList from "./ContactList";


class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData()
    }
    this.onDeletedEventListener = this.onDeletedEventListener.bind(this)
  }
  onDeletedEventListener(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({contacts})
  }
  render() {
   
    return (
      <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={this.state.contacts} onDelete={this.onDeletedEventListener}/>
    </div>
    )
  }
}

// const ContactApp = () => {
//   const contacts = getData();
//   return (
//     <div className="contact-app">
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} onDelete={}/>
//     </div>
//   );
// };

export default ContactApp;
