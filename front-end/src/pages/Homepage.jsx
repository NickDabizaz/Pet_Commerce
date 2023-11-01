function Homepage(props) {
  return (
    <>
      Mockup
      <br />
      <button onClick={() => props.setRoute("mockupbelom")}>
        home - belom login
      </button>
      <br />
      <button onClick={() => props.setRoute("mockupbrowse")}>Browse</button>
      <br />
      <button onClick={() => props.setRoute("mockupdetail")}>Detail</button>
      <br />
      <button onClick={() => props.setRoute("mockupcommunity")}>
        Community
      </button>
    </>
  );
}

export default Homepage;
