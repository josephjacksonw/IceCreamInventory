import React from "react";
import PropTypes from "prop-types";

function ICDetail(props){
  const { ic, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>IC Detail</h1>
      <h3>{ic.location} - {ic.names}</h3>
      <p><em>{ic.issue}</em></p>
      <button onClick={onClickingEdit}>Update IC</button>
      <button onClick={()=> onClickingDelete(ic.id)}>Close IC</button>
      <hr/>
    </React.Fragment>
  );
}

ICDetail.propTypes = {
  ic: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ICDetail;