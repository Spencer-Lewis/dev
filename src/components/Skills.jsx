import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      skillsRef.current.classList.add('pop-in-animation');
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="container mx-auto my-8 px-4 pt-0 mt-0 scroll-up-container">
      <ul className="font-sans visible">
        <li><strong>Front-End:</strong> React | Redux | Angular | Javascript | Typescript |
            HTML | CSS | Apollo | NextJS</li>
        <li><strong>Back-End:</strong> Node | Express | Restify | Python | Fast API | Java |
            Spring Boot</li>
        <li><strong>Databases:</strong> MongoDB | MemSQL | IBM DB2 | PostgreSQL | Elastic
            Search | Redis</li>
        <li><strong>Testing:</strong> Jest | Enzyme | React Testing Library | Mocha | Chai |
            PyTest | BDD</li>
        <li><strong>Project Management:</strong> Github | Agile | XP Practices | Pivotal
            Tracker | Jira | Aha | Trello | Asana | Confluence | CI/CD Practices</li>
      </ul>
    </section>
  );
};

export default Skills;
