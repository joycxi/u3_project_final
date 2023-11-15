import "./Popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">x</button>
        {props.name && (
          <div>
            <h1>{props.name}</h1>

          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;