import React, { useState, useEffect } from 'react';
import PhotoViewer from './PhotoViewer';
import choreScreenshot from '../assets/chore_app/chores_screenshot.jpg';
import roomsScreenshot from '../assets/chore_app/rooms_screenshot.jpg';
import editChore from '../assets/chore_app/edit_chore.jpg';
import kitchenScreenshot from '../assets/chore_app/kitchen_screenshot.jpg';
import helloScreenshot from '../assets/assistant/hello.png';
import irrigationScreenshot from '../assets/assistant/irrigation.png';
import whereIs from '../assets/assistant/where_is.png';

const Projects = () => {
  const [projectsVisible, setProjectsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'House Chore Tracker',
      description: `
        The Chore Tracker App is a robust and user-friendly platform designed to simplify household chore management. With a sleek and intuitive interface, users can effortlessly organize and track chores across different rooms. The app allows users to create rooms, each with its unique set of chores, and set recurring schedules for tasks. Whether it's vacuuming the living room every week or cleaning windows monthly, the app ensures no task is overlooked.
        
        Key Features:
        - Create and customize rooms for different areas of your home.
        - Keep tabs on chores with detailed information such as name, recurrence, and due dates.
        - Choose from various recurrence units like days, weeks, and months for flexible scheduling.
        - Easily update and delete chores as tasks evolve or change.
        - A clean and modern design makes chore management a breeze.
        
        Never miss a chore again — streamline your household responsibilities with the Chore Tracker App.
      `,
      imageUrls: [choreScreenshot, roomsScreenshot, kitchenScreenshot, editChore],
    },
    {
      id: 2,
      title: 'AI Home Assistant Chatbot',
      description: `
      Elevate your home management experience with the AI Home Assistant Chatbot! This innovative application integrates cutting-edge natural language processing powered by Google's Dialogflow.
      
      Key Features:
      - Intuitive Interaction: Engage in natural conversations with your home assistant through a user-friendly chat interface.
      - Personalized Assistance: Obtain instant information about various aspects of your home, from the location of items to instructions on specific tasks.
      - Dialogflow Integration: Harness the power of Google's Dialogflow for enhanced conversational experiences, ensuring that your queries are met with accurate and context-aware responses.
      
      This Smart Home Assistant Chatbot is designed to streamline your daily routines, making home management a breeze. Whether you're a homeowner or a house sitter, enjoy the convenience of a virtual assistant that understands your unique needs.
      `,
      imageUrls: [helloScreenshot, irrigationScreenshot, whereIs],
    },
  ];

  useEffect(() => {
    setProjectsVisible(true);
  }, []);

  return (
    <section id="projects" className="container mx-auto my-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mx-auto">
        {projects.map((project) => (
          <div key={project.id} className={`project-container ${projectsVisible ? 'pop-in-animation' : ''}`}>
            <div className={`p-6 rounded-lg shadow-lg project ${projectsVisible ? 'visible' : ''}`}>
              <h2 className="text-xl font-bold font-sans text-center">{project.title}</h2>
              <p className="text-white m-4 mt-1 font-sans text-left leading-relaxed">
                {project.description.split('\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph.trim() && <span>{paragraph}</span>}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <PhotoViewer images={project.imageUrls} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
