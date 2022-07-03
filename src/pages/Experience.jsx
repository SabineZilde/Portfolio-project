import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import { ExperienceList } from '../helpers/ExperienceList';
import Setupad from '../assets/setupad.png'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#25002d">
        {ExperienceList.map((experience, idx) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={experience.date}
              contentStyle={{ color: '#25002d'}}
              iconStyle={{ backgroundImage: `url("https://content.sifted.eu/wp-content/uploads/2020/03/27110820/STUPAD-LOGO.png")`, backgroundSize: '50px', backgroundPosition: '', backgroundRepeat: 'no-repeat', color: "#fff" }}
              contentArrowStyle={{ borderRight: '20px solid #fff' }}
              key={idx}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{experience.type}</h5>
              <p>{experience.company}</p>
            </VerticalTimelineElement>
          )
        })}

       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#42c108", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Riga Technical University
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            MScEng, Digital Humanities
          </h5>
          <p>
            Master Thesis: “Developing Guidelines for Readers and Creators to
            Improve Data Visualization Literacy”
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2014"
          iconStyle={{ background: "#42c108", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Latvia
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            BFA, Graphic Design
          </h5>
          <p>
            Diploma thesis: “Infographic as a Modern Visual Communication Type”
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
