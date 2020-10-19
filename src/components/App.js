import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Arpit", "Utkers", "abdul"];

    return (
      <>
        <ol key="relativeList">
          {this.relatives.map((relative, idx) => (
            <li key={`relativeListItem${idx + 1}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
