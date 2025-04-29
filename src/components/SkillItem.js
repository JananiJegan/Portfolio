// SkillItem.js
import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ skillName, skillLevel }) => {
  return (
    <div className="skill-item">
      <div className="skill-name">{skillName}</div>
      <div className="skill-bar">
        <div
          className="skill-level"
          style={{ width: `${skillLevel}%` }}
        >
          {skillLevel}%
        </div>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default SkillItem;
