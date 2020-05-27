import React from 'react';
import SkillsList from './SkillsList';
import SearchBar from './SearchBar';
import image from "../../Assets/images/HelloWorld4.png";

const skill = {
    imageSrc: {image},
    name: 'HTML Skeleton',
    category: 'HTML',
    level: 'Beginner',
    description: "How to set up your basic HTML file."
  }

  const skills = [
      skill,
      skill,
      skill,
      skill,
      skill,
      skill,
      skill,
      skill
  ]

class Learn extends React.Component {
    searchTerm(term, sortBy) {
        console.log(`You are seaching for ${term} and ${sortBy}`);
    } 

    render() {
        return (
            <div className="Learn">
                <SearchBar searchTerm={this.searchTerm}/>
                <SkillsList skills={skills}/> 
            </div>
        );
    }
}

export default Learn;

