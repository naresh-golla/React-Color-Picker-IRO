import React from "react";
import ReactDOM from "react-dom";
import iro from "@jaames/iro";
import "./styles.css";
import IroColorPicker from "./IroColorPicker";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#fffefa"
    };
  }
  onColorChange = color => {
    this.setState({
      color: color
    });
    console.log(color.hexString);
  };
  render() {
    console.log(this.state.color);
    return (
      <div className="App" style={{ background: this.state.color }}>
        <IroColorPicker color={"#fff"} onColorChange={this.onColorChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
