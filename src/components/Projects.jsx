import React from 'react';
import PhotoViewer from './PhotoViewer';
// chore app screenshots
import choreScreenshot from '../assets/chore_app/chores_screenshot.jpg';
import roomsScreenshot from '../assets/chore_app/rooms_screenshot.jpg';
import editChore from '../assets/chore_app/edit_chore.jpg';
import kitchenScreenshot from '../assets/chore_app/kitchen_screenshot.jpg';
// assistant app screenshots
import helloScreenshot from '../assets/assistant/hello.png';
import irrigationScreenshot from '../assets/assistant/irrigation.png';
import whereIs from '../assets/assistant/where_is.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'House Task Manager',
      description: 'Chore and Task Manager to aid in managing all repeating or one-off household tasks',
      imageUrls: [choreScreenshot, roomsScreenshot, kitchenScreenshot,editChore ],
    },
    {
      id: 2,
      title: 'House Assistant',
      description: '(Under Construction) AI chatbot to answer any questions a housekeeper may have',
      imageUrls: [helloScreenshot, irrigationScreenshot, whereIs],
    },
  ];

  return (
    <section id="projects" className="container mx-auto my-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="p-6 rounded-lg shadow-lg project">
            <h2 className="text-xl font-bold font-sans text-center">{project.title}</h2>
            <p className="text-white m-4 mt-1 font-sans text-center">{project.description}</p>
            <PhotoViewer images={project.imageUrls}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
