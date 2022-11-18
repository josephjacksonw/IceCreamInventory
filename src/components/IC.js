import React from "react";
import PropTypes from "prop-types";

function IC(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenICClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

IC.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenICClicked: PropTypes.func
};

export default IC;