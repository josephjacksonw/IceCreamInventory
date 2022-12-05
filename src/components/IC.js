import React from "react";
import PropTypes from "prop-types";

function IC(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenICClicked(props.id)}>
        <h3>{props.names}</h3>
        <p><em>from {props.brand}</em></p>
        <h4>Click to buy some of this flavor</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

IC.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  id: PropTypes.string,
  whenICClicked: PropTypes.func
};

export default IC;