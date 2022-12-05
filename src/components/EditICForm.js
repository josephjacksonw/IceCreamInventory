import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditICForm (props) {
  const { ic } = props;

  function handleEditICFormSubmission(event) {
    event.preventDefault();
    props.onEditIC({
      names: event.target.names.value, 
      brand: event.target.brand.value,
      id: ic.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditICFormSubmission} 
        buttonText="Update IC" />
    </React.Fragment>
  );
}

EditICForm.propTypes = {
  onEditIC: PropTypes.func,
  ic: PropTypes.object
};

export default EditICForm;