import React from "react";
import IC from "./IC";
import PropTypes from "prop-types";


function ICList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr/>
      {props.icList.map((ic) =>
        <IC 
          whenICClicked={props.onICSelection}
          names={ic.names}
          brand={ic.brand}
          scoops={ic.scoops}
          id={ic.id}
          key={ic.id}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for icList.
ICList.propTypes = {
  icList: PropTypes.array,
  onICSelection: PropTypes.func
};

export default ICList;