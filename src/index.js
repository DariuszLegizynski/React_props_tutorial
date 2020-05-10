import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./components/contacts";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card {...Contacts.Beyonce} />
    <Card {...Contacts.JackBauer} />
    <Card {...Contacts.ChuckNoris} />
  </div>,
  document.getElementById("root")
);
