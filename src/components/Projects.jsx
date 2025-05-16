import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "School ERP",
      description: "A complete system to manage students, attendance, fees, and academic reports.",
      image: "/images/school-erp.jpg", // Placeholder image
      link: "https://github.com/your-username/school-erp"
    },
    {
      name: "Billiap App",
      description: "A mobile/web-based application (More details can be added).",
      image: "/images/billiap-app.jpg", // Placeholder image
      link: "https://github.com/your-username/billiap-app"
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
