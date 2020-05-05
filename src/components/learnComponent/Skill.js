import React from 'react';
import "./Skills.css";
import image from "../../Assets/images/HelloWorld4.png";


class Skill extends React.Component {
    render() {
        const skill = this.props.skill;
        return (
            <div className="Skill">
  <div className="image-container">
    <img src={image} alt='hi'/>
  </div>
    <h2>{skill.name}</h2>
    <div className="Skill-description">
        <p>{skill.description}</p>
    </div>
    <div className="Skill-section">
      <h3 className="category">{skill.category}</h3>
      <h3 className="level">{skill.level}</h3>
    </div>
</div>
        )
    }
}

export default Skill;