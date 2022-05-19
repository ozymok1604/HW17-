import React, { Component } from "react";

class Input extends Component {
  state = {
    value: "",
    manChecked: false,
    womanChecked: false,
    anonimChecked: false,
  };

  changeValueInput = (e) => {
    this.props.onInputChange(e.target.value);
    this.setState({ value: e.target.value });
  };

  handleInputChangeMan = () => {
    this.props.onCheckStateMan(!this.state.manChecked);
    this.setState({
      manChecked: !this.state.manChecked,
    });
  };
  handleInputChangeWoman = () => {
    this.props.onCheckStateWoman(!this.state.womanChecked);
    this.setState({
      womanChecked: !this.state.womanChecked,
    });
  };
  handleInputChangeAnonim = () => {
    this.props.onCheckStateAnonim(!this.state.anonimChecked);
    this.setState({
      anonimChecked: !this.state.anonimChecked,
    });
  };

  render() {
    return (
      <div class="app">
        <div>Contacts</div>
        <input
          onChange={this.changeValueInput}
          value={this.state.value}
        ></input>

        <div className="checkBox">
          <input type="checkbox" onChange={this.handleInputChangeMan}></input>
          <span>Man</span>
          <input type="checkbox" onChange={this.handleInputChangeWoman}></input>
          <span>Woman</span>
          <input
            type="checkbox"
            onChange={this.handleInputChangeAnonim}
          ></input>
          <span>Unkown</span>
        </div>
      </div>
    );
  }
}

export { Input };
