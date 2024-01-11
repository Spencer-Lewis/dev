import React from 'react';
import PhotoViewer from './PhotoViewer';
import choreScreenshot from '../assets/chore_app/chores_screenshot.jpg';
import roomsScreenshot from '../assets/chore_app/rooms_screenshot.jpg';
import editChore from '../assets/chore_app/edit_chore.jpg';
import kitchenScreenshot from '../assets/chore_app/kitchen_screenshot.jpg';

const Projects = () => {
  // Sample project data (replace this with your actual project data)
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
      description: 'AI chatbot to answer any questions a housekeeper may have',
      imageUrls: ['https://via.placeholder.com/800x400', 'https://via.placeholder.com/800x400'], // Replace with actual image URL
    },
  ];

  return (
    <section id="projects" className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="p-6 rounded-lg shadow-lg project">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            {/* {project.imageUrls?.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover mb-4 rounded-md"
                style={{ maxWidth: '100%' }} // Set maximum width to fit the container
              />
            ))} */}
            <PhotoViewer images={project.imageUrls}/>
            <p className="text-white mb-4 font-sans">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
