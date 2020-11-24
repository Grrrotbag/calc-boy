const Keypad = (props) => {
  return (
    <div id="keypad">

      <div className="keypad-row">
        <button className="btn mode-btn btn-wide" id="clear" onClick={props.clear} value="clear"> AC </button>
        <button className="btn mode-btn" id="percent" onClick={props.backspace} value="%"> ⌫ </button>
        <button className="btn mode-btn" id="divide" onClick={props.operator} value="/"> ÷ </button>
      </div>

      <div className="keypad-row">
        <button className="btn" id="seven" onClick={props.number} value="7"> 7 </button>
        <button className="btn" id="eight" onClick={props.number} value="8"> 8 </button>
        <button className="btn" id="nine" onClick={props.number} value="9"> 9 </button>
        <button className="btn mode-btn" id="multiply" onClick={props.operator} value="*"> × </button>
      </div>

      <div className="keypad-row">
        <button className="btn" id="four" onClick={props.number} value="4"> 4 </button>
        <button className="btn" id="five" onClick={props.number} value="5"> 5 </button>
        <button className="btn" id="six" onClick={props.number} value="6"> 6 </button>
        <button className="btn mode-btn" id="subtract" onClick={props.operator} value="-"> – </button>
      </div>


      <div className="keypad-row">
        <button className="btn" id="one" onClick={props.number} value="1"> 1 </button>
        <button className="btn" id="two" onClick={props.number} value="2"> 2 </button>
        <button className="btn" id="three" onClick={props.number} value="3"> 3 </button>
        <button className="btn mode-btn" id="add" onClick={props.operator} value="+"> + </button>
      </div>

      <div className="keypad-row">
        <button className="btn btn-wide" id="zero" onClick={props.number} value="0"> 0 </button>
        <button className="btn mode-btn" id="decimal" onClick={props.decimal} value="."> . </button>
        <button className="btn mode-btn" id="equals" onClick={props.equals} value="="> = </button>
      </div>
    </div>
  );
};

export default Keypad;