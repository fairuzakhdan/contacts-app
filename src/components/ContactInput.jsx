import React from "react";
import { getData } from "../utils/data";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: ''
        }
        this.addNameInput = this.addNameInput.bind(this)
        this.addTagInput = this.addTagInput.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    addNameInput(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }
    addTagInput(event) {
        this.setState(() => {
            return {
                tag: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state)
    }
  render() {
    return (
      <form action="" onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder="Input Name" value={this.state.name} onChange={this.addNameInput}/>
        <input type="text" placeholder="Input Tag" value={this.state.tag} onChange={this.addTagInput}/>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
