import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer at kalachakra Consulting
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bekasi, Indonesia
            </h4>
            <p>Full-stack Web Development, API Development, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Purwadhika Bootcamp Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Batam, Indonesia
            </h4>
            <p>Full Stack Web Development</p>
            <a
              href="https://drive.google.com/drive/folders/1Bb-on2La-1Aby6zgZ85mtVnk3G2GnNB3?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#5000ca' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#370093')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#5000ca')}
            >
              Certificate of completion
            </a>
            <br />
            <a
              href="https://drive.google.com/drive/folders/1ZWkzasqSOpVUK8VCAuVJlDAHBe-O-aFB?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#5000ca' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#370093')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#5000ca')}
            >
              Certificate of best student
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Undergraduate Student at Telkom University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bandung, Indonesia
            </h4>
            <p>Electrical Engineering major</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
