import React from "react";
import { getData } from "../utils/data";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        }
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
