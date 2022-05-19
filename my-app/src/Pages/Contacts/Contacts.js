import React, { Component } from "react";
import { Input } from "./input.js";

import { Contacts } from "./ShowContacts";
// import { ShowContacts } from "./data.js";
// import { Inform } from "./Information";

class Book extends Component {
  state = {
    search: "",
    manChecked: "",
    womanChecked: "",
    anonimCheked: "",
    book: [
      {
        firstName: "Барней",
        lastName: "Стинсовский",
        phone: "+380956319521",
        gender: "male",
        id: 1,
      },
      {
        firstName: "Робин",
        lastName: "Щербатская",
        phone: "+380931460123",
        gender: "female",
        id: 2,
      },
      {
        firstName: "Аномный",
        lastName: "Анонимус",
        phone: "+380666666666",
        gender: "unkown",
        id: 3,
      },
      {
        firstName: "Лилия",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
        id: 4,
      },
      {
        firstName: "Маршэн",
        lastName: "Эриксонян",
        phone: "+380739432123",
        gender: "male",
        id: 5,
      },
      {
        firstName: "Теодор",
        lastName: "Мотсбэс",
        phone: "+380956319521",
        gender: "male",
        id: 6,
      },
    ],
  };
  changeState = (value) => {
    this.setState({ search: value });
  };

  checkStateMan = (value) => {
    this.setState({ manChecked: value });
  };
  checkStateWoman = (value) => {
    this.setState({ womanChecked: value });
  };
  checkStateAnonim = (value) => {
    this.setState({ anonimChecked: value });
  };

  render() {
    console.log(this.state.search);
    return (
      <div className="app2">
        <Input
          onInputChange={this.changeState}
          onCheckStateMan={this.checkStateMan}
          onCheckStateWoman={this.checkStateWoman}
          onCheckStateAnonim={this.checkStateAnonim}
        />

        {this.state.book.map((contact) => {
          console.log(this.state);

          if (
            (this.state.manChecked == true && contact.gender === "male") ||
            (this.state.womanChecked == true && contact.gender === "female") ||
            (this.state.anonimChecked == true && contact.gender === "unkown")
          ) {
            if (
              contact.firstName.includes(this.state.search) ||
              contact.lastName.includes(this.state.search) ||
              contact.phone.includes(this.state.search)
            ) {
              return <Contacts contact={contact} />;
            }
          }
        })}
      </div>
    );
  }
}

export { Book };
