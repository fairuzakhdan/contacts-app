import React from "react";
import { getData } from "../utils/data";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        }
        this.addNameInput = this.addNameInput.bind(this)
        this.addTagInput = this.addTagInput.bind(this)
    }
    addNameInput(event) {
        this.setState(() => {
            return {
                contacts: event.target.value
            }
        })
    }
    addTagInput(event) {
        this.setState(() => {
            return {
                contacts: event.target.value
            }
        })
    }
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Input Name" value={} onChange={this.addNameInput}/>
        <input type="text" placeholder="Input Tag" onChange={this.addTagInput}/>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
