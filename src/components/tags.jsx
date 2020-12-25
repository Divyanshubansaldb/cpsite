import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

class tags extends Component {
  onSelect(selectedList, selectedItem, addingtag) {
    addingtag(selectedItem);
  }

  onRemove(selectedList, removedItem, removingtag) {
    removingtag(removedItem);
  }

  render() {
    return (
      <div className="btn my-3">
        <Multiselect
          placeholder={this.props.placeholder}
          options={this.props.title} // Options to display in the dropdown
          selectedValues={true} // Preselected value to persist in dropdown
          onSelect={(selectedList, selectedItem) => {
            this.onSelect(selectedList, selectedItem, this.props.addingtag);
          }} // Function will trigger on select event
          onRemove={(selectedList, selectedItem) => {
            this.onRemove(selectedList, selectedItem, this.props.removingtag);
          }} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </div>
    );
  }
}

export default tags;
