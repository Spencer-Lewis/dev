import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
  //   <section id="experience" className="container mx-auto my-8 px-4">
  //   <h2 className="text-3xl font-bold mb-4">Education</h2>

  //   <div className="mb-8">
  //       <h3 className="text-xl font-bold mb-2">Full Stack Web Development Course – General Assembly</h3>
  //       <p className="text-gray-700">Nov 2015 - Mar 2016</p>
  //   </div>

  //   <div className="mb-8">
  //       <h3 className="text-xl font-bold mb-2">B.S. Biology – Southern Polytechnic State University</h3>
  //       <p className="text-gray-700">Minor in Chemistry</p>
  //       <p className="text-gray-700">Aug 2010 - May 2014</p>
  //   </div>

  // </section>
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
    {/* <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement> */}

    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="April 2013"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
      <p>
        Strategy, Social Media
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 2012"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
      <p>
        Creative Direction, User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2002 - 2006"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
      <p>
        Creative Direction, Visual Design
      </p>
    </VerticalTimelineElement>

  </VerticalTimeline>
);

export default Timeline;
