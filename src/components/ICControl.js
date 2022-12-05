import React from 'react';
import NewICForm from './NewICForm';
import ICList from './ICList';
import EditICForm from './EditICForm';
import ICDetail from './ICDetail';

class ICControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainICList: [],
      selectedIC: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedIC != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedIC: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingIC = (id) => {
    const newMainICList = this.state.mainICList.filter(ic => ic.id !== id);
    this.setState({
      mainICList: newMainICList,
      selectedIC: null
    });
  }


  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingICInList = (icToEdit) => {
    const editedMainICList = this.state.mainICList
      .filter(ic => ic.id !== this.state.selectedIC.id)
      .concat(icToEdit);
    this.setState({
      mainICList: editedMainICList,
      editing: false,
      selectedIC: null
    });
  }


  handleAddingNewICToList = (newIC) => {
    const newMainICList = this.state.mainICList.concat(newIC);
    this.setState({mainICList: newMainICList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedIC = (id) => {
    const selectedIC = this.state.mainICList.filter(ic => ic.id === id)[0];
    this.setState({selectedIC: selectedIC});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditICForm 
        ic = {this.state.selectedIC} 
        onEditIC = {this.handleEditingICInList} />
      buttonText = "Return To Entire Inventory";
    } else if (this.state.selectedIC != null) {
      currentlyVisibleState = 
      <ICDetail 
        ic={this.state.selectedIC} 
        onClickingDelete={this.handleDeletingIC}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return To Entire Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewICForm
        onNewICCreation={this.handleAddingNewICToList}/>;
      buttonText = "Return To Entire Inventory"; 
    } else {
      currentlyVisibleState = 
      <ICList
        onICSelection={this.handleChangingSelectedIC} 
        icList={this.state.mainICList} />;
      buttonText = "Add Ice Cream to Inventory"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default ICControl;