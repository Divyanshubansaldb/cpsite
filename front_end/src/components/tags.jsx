import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

class tags extends Component {
  state = {
    options: [
      // "ram",
      // "shyam",
      // "divyanshu",
      // "pooja",
      { name: "ram" },
      { name: "shyam" },
    ],
  };

  render() {
    return (
      <div className="btn my-3">
        <Multiselect
          placeholder={this.props.placeholder}
          options={this.props.options} // Options to display in the dropdown
          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.onSelect} // Function will trigger on select event
          onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </div>
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
