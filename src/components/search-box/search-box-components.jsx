import React from "react";

import './search-box-style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}></input>
)

// export class SearchBox extends Component {
//     render() {
//         return(
//             <input 
//                 className="search"
//                 type="search" 
//                 placeholder={this.props.placeholder} 
//                 onChange={this.props.handleChange}>
//             </input>
//         );
//     }   
// }
