import React from "react";
import "./App.css";
import Calendar from "./Calendar";

// TODO: create a function to send request to the server to get the data
class ConnectionExample extends React.Component {
  componentDidMount(): void {
    // TODO: send request to the server to get the data
    fetch("http://localhost:8000/api/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Connection Example</h1>
        <Calendar />
      </div>
    );
  }
}

export default ConnectionExample;
