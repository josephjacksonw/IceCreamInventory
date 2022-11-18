import React from "react";
import { v4 } from 'uuid'; // new code
import PropTypes from "prop-types"; //import PropTypes
import ReusableForm from "./ReusableForm";

function NewICForm(props){
  function handleNewICFormSubmission(event) {
    event.preventDefault();
    props.onNewICCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewICFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}



NewICForm.propTypes = {
  onNewICCreation: PropTypes.func
};


export default NewICForm;