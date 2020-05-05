import React from 'react';
import "./SearchBar.css";

const sortByOptions = {
    'HTML' : 'HTML',
    'CSS' : 'CSS',
    'JavaScript' : 'JavaScript'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <h1 className="section-title">Coding Skills</h1>
                <div class="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Skill" />
                </div>
                <div class="submit button primary-button">
                    <a>Let's Learn</a>
                </div>
            </div>
        )
    }
}

export default SearchBar; 