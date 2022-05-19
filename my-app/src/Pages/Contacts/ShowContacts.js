import React, { Component } from "react";
import "./style.css";
import { Input } from "./input";

class Contacts extends Component {
  state = {
    opened: true,
  };

  changeState = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    return (
      <div
        class="block"
        key={this.props.contact.id + this.props.contact.lastName}
        onClick={this.changeState}
      >
        {" "}
        {this.state.opened ? (
          this.props.contact.firstName
        ) : (
          <div>
            {this.props.contact.firstName}
            <div
              style={{
                textAlign: "center",
              }}
            >
              lastName: {this.props.contact.lastName}
              <p>gender: {this.props.contact.gender}</p>
              <p>phone: {this.props.contact.phone}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export { Contacts };
