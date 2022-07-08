import React, { useState } from "react";
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
  const [icon, setIcon] = useState(<WorkIcon />);


  return (
    <div className="experience">
      <VerticalTimeline lineColor="#25002d">
        {ExperienceList.map((experience, idx) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={experience.date}
              contentStyle={{ color: '#25002d' }}
              iconStyle={{ background: "#25002d", color: "#fff" }}
              icon={() => {
                if (experience.type === 'work') {
                  return icon;
                } else if (experience.type === 'education') {
                  return setIcon(<SchoolIcon />);
                } else if (experience.type === 'certificate') {
                  return setIcon(<CastForEducationIcon />)
                } else {
                  return setIcon(<InternshipIcon />)
                }
              }}
              contentArrowStyle={{ borderRight: '20px solid #fff' }}
              key={idx}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{experience.type}</h5>
              <p>{experience.company}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
