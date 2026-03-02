import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import './index.css'; // Ensure we import the global CSS with variables

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Update global CSS variables based on hovered project
  useEffect(() => {
    const root = document.documentElement;
    if (hoveredProject) {
      // Set the colors, but they won't animate directly.
      root.style.setProperty('--theme-primary', hoveredProject.theme.primary);
      root.style.setProperty('--theme-secondary', hoveredProject.theme.secondary);
      root.style.setProperty('--theme-shadow', hoveredProject.theme.shadow);
      // Trigger the fade-in of the new gradient
      root.style.setProperty('--theme-bg-opacity', '0.8');
    } else {
      // Fade out to reveal the base slate color
      root.style.setProperty('--theme-bg-opacity', '0');
    }
  }, [hoveredProject]);

  return (
    <div className="app-container">
      {/* Base orbs for resting state */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Background that reacts to CSS variables */}
      <div className="theme-background"></div>

      <main className="main-content">
        <Header />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
