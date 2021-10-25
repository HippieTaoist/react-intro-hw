import "./App.css";
import React, { Component } from "react";

import Box from "./components/Box";

export class App extends Component {
  state = {
    sidebarBackgroundColor: "yellow",

    colorList: [
      {
        id: 1,
        color: "hotpink",
        colorText: "Hot Pink",
      },
      {
        id: 2,
        color: "lime",
        colorText: "Lime",
      },
      {
        id: 3,
        color: "rebeccapurple",
        colorText: "Rebecca Purple",
      },
    ],
    boxList: [
      {
        id: 1,
        backgroundImage: "url('https://picsum.photos/200')",
        title: "Box 1",
      },
      {
        id: 2,
        backgroundImage: "url('https://picsum.photos/200')",
        title: "Box 2",
      },

      {
        id: 3,
        backgroundImage:
          "url('https://source.unsplash.com/random/200x200?sig=')",
        title: "Box 3",
      },
    ],
  };

  handleSidebarLinks = () => {
    return (
      <ul>
        {this.state.colorList.map(({ id, color, colorText }) => (
          <li
            key={id}
            style={{ backgroundColor: color, listStyle: "none" }}
            onClick={this.handleSidebarLinksClick}
            onMouseEnter={this.handleSidebarLinksMouseEnter}
            onMouseOut={this.handleSidebarLinksMouseExit}
          >
            {colorText}
          </li>
        ))}
      </ul>
    );
  };

  handleSidebarLinksMouseExit = (event) => {
    event.target.style.fontSize = "100%";
    event.target.style.color = "black";
  };

  handleSidebarLinksMouseEnter = (event) => {
    event.target.style.fontSize = "larger";
    event.target.style.color = "yellow";
  };

  handleSidebarLinksClick = (event) => {
    console.log("Line XXX - I'M CLICKED!  this.state -", this.state, event);
    this.setState({
      sidebarBackgroundColor: event.target.style.backgroundColor,
    });

    console.log("Line XXX - I'M CLICKED!  this.state -", this.state);
  };

  handledBodyColors = (id) => {
    let searchForOne = (passedID) => passedID === id;

    let foundOne = this.state.colorList.findIndex(searchForOne);

    return this.state.colorList[foundOne].color;
  };

  handleBodyParts = () => {
    return (
      <div className="App-body-box-container">
        {this.state.boxList.map(({ id, backgroundImage, title }) => (
          <div
            className="App-body-box"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random/200x200?sig=" +
                id +
                "')",
              color: "yellow",
            }}
          >
            <Box key={id} image={backgroundImage} title={title} />
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { sidebarBackgroundColor } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shawn Kittel</h1>
        </header>
        <div className="App-midsection">
          <div
            className="App-sidebar"
            style={{ backgroundColor: sidebarBackgroundColor }}
          >
            <div className="App-links">{this.handleSidebarLinks()}</div>
            <div style={{ textAlign: "center" }}>Sidebar</div>
          </div>
          <div className="App-body">
            <div>body</div>
            <br />
            <figure className="App-figure">
              <img
                className="App-image"
                src="https://via.placeholder.com/150"
                alt="Yadas"
                width="150"
                height="150"
              />
              <figcaption className="App-figcaption">
                This is a placeholder caption for image
              </figcaption>
            </figure>

            <br />
            <div className="App-body-text">
              Moinsen! Mundraub und Missetäter friemeln geflissentlich Eisbein.
              Die Fressalien lobpreisen die blümerant Geschmeide. Der
              Panzerkampfwagen stagnieren das flügge
              Fleischwarenfachverkäuferin. Die Kaiserwetter flanieren die pompös
              Donnerwetter. Sittenstrolch und Firlefanz ergötzen kess Gamaschen.
              Der Blutwurst meucheln der kess Abort. Das Thusnelda grämen das
              adrett Schlachtschüssel. Kummerspeck und Fatzke bauchpinseln
              altbacken Augenweide. Der halbstark Stelldichein. Der bierernst
              Hupfdohle. Die einfältig Hatz verhaspeln. Ei der Daus!
            </div>
            <br />
            {this.handleBodyParts()}
          </div>
        </div>

        <div className="App-footer">Copyright 2021: Shawn Kittel </div>
      </div>
    );
  }
}

export default App;
