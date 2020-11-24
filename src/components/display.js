const Display = (props) => {
  return (
    <div id="screen">
      <div id="sum-display" className="screen">
        {props.runningSum !== "0" ? props.runningSum : <span>&nbsp;</span>}
      </div>
      <br />
      <div id="display" className="screen">
        {props.input}
      </div>
    </div>
  );
};

export default Display;
