import { Component } from "react";
import stl from "./searchBar.module.css";

class SearchBar extends Component {
    render() {
        return (
            <form className={stl.searchBar}>
                <input type="text" placeholder="Search" />
            </form>
        )
    }
}

export default SearchBar;