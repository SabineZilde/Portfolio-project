import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work'
import InternshipIcon from '@mui/icons-material/WorkOutline'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import "../styles/Experience.css";
import { ExperienceList } from '../helpers/ExperienceList';

function Experience() {
  const toggleColor = (type) => {
    if (type === 'work') {
      return '#25002d';
    } else if (type === 'education') {
      return '#FC415A';
    } else if (type === 'certificate') {
      return '#713068';
    } else {
      return '#f38f9c';
    };
  };

  const toggleIcon = (type) => {
    if (type === 'work') {
      return <WorkIcon />;
    } else if (type === 'education') {
      return <SchoolIcon />;
    } else if (type === 'certificate') {
      return <CastForEducationIcon />;
    } else {
      return <InternshipIcon />;
    };
  };

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#25002d">
        {ExperienceList.map((experience, idx) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={experience.date}
              contentStyle={{ color: '#25002d' }}
              iconStyle={{ background: `${toggleColor(experience.type)}`, color: "#fff" }}
              icon={toggleIcon(experience.type)}
              contentArrowStyle={{ borderRight: '20px solid #fff' }}
              key={idx}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{experience.subtitle}</h5>
              <p>{experience.company}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
