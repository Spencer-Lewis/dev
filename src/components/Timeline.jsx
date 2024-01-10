import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="June 2021 - August 2023"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Senior Full-Stack Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Reggora - Boston, MA</h4>
      <p>
        Spearheaded the architecture and implementation of comprehensive end-to-end
        features for the Reggora system,
        a prominent platform known for facilitating rapid appraisal turnaround times to
        expedite the process of securing mortgage loans.
        These features were instrumental in processing payments and ensuring the
        integrity of client relationships and financial data.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="May 2019 - February 2021"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">React Developer II</h3>
      <h4 className="vertical-timeline-element-subtitle">Priority Payments - Atlanta, GA</h4>
      <p>
        Architected and implemented large end-to-end features for the React/Redux client
        and the NodeJS/Restify backend of the CPX system leveraged to process virtual
        payments and maintain client relationships and financial data.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="April 2016 - April 2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">The Home Depot - Atlanta, GA</h4>
      <p>
        Lead Engineer of the Discount Engine Team, delivering flexible discounts to Home Depot customers 
        in stores. Led a cross-functional team of engineers as the lead engineer, product
        manager, and designer to architect and implement a system utilized by internal
        software development teams for assessing adherence to agile development
        processes. Collaborated with cross-functional team members to architect secure, reliable,
        and scalable software solutions leveraging technologies such as Java, Spring Boot, AngularJS, IBM DB2, and Redis.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Nov 2015 - Mar 2016"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Full Stack Web Development Course</h3>
      <h4 className="vertical-timeline-element-subtitle">General Assembly - Atlanta, GA</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Aug 2010 - May 2014"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">B.S. Biology focus in Molecular Biology</h3>
      <h4 className="vertical-timeline-element-subtitle">Kennessaw State University - Atlanta, GA</h4>
      <p>Minor in Chemistry</p>
    </VerticalTimelineElement>

  </VerticalTimeline>
);

export default Timeline;
