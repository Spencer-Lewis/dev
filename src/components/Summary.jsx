import React, { useEffect, useRef } from 'react';

const Summary = () => {
  const summaryRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      summaryRef.current.classList.add('pop-in-animation');
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div ref={summaryRef} className="rounded-md p-5 pt-0 scroll-up-container">
      <p className="text-lg font-sans">
        Full-Stack Software Engineer with 7 years of experience in front-end, back-end
        development, and project management.
        Proficient in a diverse range of technologies and methodologies, committed to
        driving innovative solutions and ensuring a seamless user experience.
        Demonstrated expertise in spearheading architecture, cross-functional collaboration,
        and agile methodologies.
      </p>
    </div>
  );
};

export default Summary;
