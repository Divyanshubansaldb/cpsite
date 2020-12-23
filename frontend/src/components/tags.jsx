// import React, { Component } from "react";
// import Checkbox from "@material-ui/core/Checkbox";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// class tags extends Component {
//   render() {
//     return (
//       <div className="btn my-3">
//         <Autocomplete
//           multiple
//           id="checkboxes-tags-demo"
//           options={this.props.title}
//           disableCloseOnSelect
//           getOptionLabel={(option) => option.name}
//           renderOption={(option, { selected }) => (
//             <React.Fragment>
//               <Checkbox
//                 icon={icon}
//                 checkedIcon={checkedIcon}
//                 style={{ marginRight: 8, color: "blue" }}
//                 checked={selected}
//               />
//               {option.name}
//             </React.Fragment>
//           )}
//           style={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               variant="outlined"
//               label={this.props.placeholder}
//               placeholder={this.props.placeholder}
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }
// export default tags;

import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
// import multicard from "./multiplecards";

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
