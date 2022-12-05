import React from "react";
import { v4 } from 'uuid'; // new code
import PropTypes from "prop-types"; //import PropTypes
import ReusableForm from "./ReusableForm";

function NewICForm(props){
  function handleNewICFormSubmission(event) {
    event.preventDefault();
    props.onNewICCreation({
      names: event.target.names.value, 
      brand: event.target.brand.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewICFormSubmission}
        buttonText="Buy Bucket!" />
        <p>Each Bucket has 130 scoops</p>
    </React.Fragment>
  );
}



NewICForm.propTypes = {
  onNewICCreation: PropTypes.func
};


export default NewICForm;