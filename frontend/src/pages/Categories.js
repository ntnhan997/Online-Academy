import React from "react";

export default function Categories(props) {
  return (
    <div>
      <h1>Hello {props.match.params.name}</h1>
    </div>
  );
}
