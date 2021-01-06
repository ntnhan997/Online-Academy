import React from "react";

export default function Categories(props) {
 const {name} = props.match.params;
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
