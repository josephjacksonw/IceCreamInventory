import React from "react";
import PropTypes from "prop-types";
import {useState} from 'react';

function ICDetail(props){
  const { ic, onClickingDelete, onClickingEdit, onClickingSell } = props; 
  const [scoops, setScoops] = useState(130);
  let sellScoop = () => setScoops(scoops - 1);
  if (scoops<=1 || scoops=="Sold Out") {
    sellScoop = () => setScoops("Sold Out");
  }

  return (
    <React.Fragment>
      <h1>Ice Cream Detail</h1>
      <h3>{ic.names}</h3>
      <p><em>from {ic.brand}</em></p>
      <p>Scoops remaining: {scoops}</p>
      <button onClick={sellScoop}>Sell a scoop!</button>
      <button onClick={onClickingEdit}>Edit Remaining Inventory</button>
      <button onClick={()=> onClickingDelete(ic.id)}>Throw away remaining Ice Cream in this bucket</button>
      <hr/>
    </React.Fragment>
  );
}

ICDetail.propTypes = {
  ic: PropTypes.object,
  scoops: PropTypes.object,
  sellScoop: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ICDetail;