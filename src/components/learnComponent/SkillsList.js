import React from 'react';
import Skill from './Skill';
import "./SkillsList.css";

class SkillsList extends React.Component {
    render() {
        return (
            <div className="SkillsList">
                {
                    this.props.skills.map((skill) => {
                        return <Skill skill={skill} />;
                    })
                }
            </div>
        );
    }
}

export default SkillsList;