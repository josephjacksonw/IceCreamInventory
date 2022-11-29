import React from "react";
import PropTypes from "prop-types";

function ICDetail(props){
  const { ic, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Ice Cream Detail</h1>
      <h3>{ic.names}</h3>
      <p><em>{ic.amount}</em></p>
      <button onClick={onClickingEdit}>Edit Remaining Inventory</button>
      <button onClick={()=> onClickingDelete(ic.id)}>Throw away remaining Ice Cream in this bucket</button>
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