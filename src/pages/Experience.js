import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  const [workExperience, setWorkExperience] = useState([
    {
      position: "Graphic Designer",
      type: "Freelnace",
      company: "",
    },
  ]);
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - ongoing"
          iconStyle={{ background: "#5e0275", color: "#fff" }}
          contentArrowStyle={{ borderRight: '20px solid #fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
          <h5 className="vertical-timeline-element-subtitle">Freelance</h5>
          <p>Various non-profit/pro bono individual projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09 - 12.2021"
          iconStyle={{ background: "#5e0275", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Frontend Developer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">Internship</h5>
          <p>Accenture Baltics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
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
