import React from "react";

function Homepage(props) {
  return (
    <>
      Mockup
      <br />
      <button onClick={() => props.setRoute("mockupbelom")}>
        home - belom login
      </button>
    </>
  );
}

export default Homepage;
