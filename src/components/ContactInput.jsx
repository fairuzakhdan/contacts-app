import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Input Name" />
        <input type="text" placeholder="Input Tag" />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
