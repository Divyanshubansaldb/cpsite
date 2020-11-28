import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

class tags extends Component {
  state = {
    options: [
      { name: "Srigar", id: 1 },
      { name: "Sam", id: 2 },
      { name: "Sam", id: 3 },
      { name: "Sam", id: 4 },
    ],
  };
  render() {
    return (
      <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    );
  }
}

export default tags;

// onSelect(selectedList, selectedItem) {
//     ...
// }

// onRemove(selectedList, removedItem) {
//     ...
// }
