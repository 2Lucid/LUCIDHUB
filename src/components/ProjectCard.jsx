import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }) => {
    const { name, description, url, icon: Icon, theme } = project;

    // Dynamically set CSS variables for this specific card
    const cardStyle = {
        '--card-gradient': theme.gradient,
        '--card-shadow': theme.shadow,
        '--card-primary': theme.primary
    };

    return (
        <a
            href={url}
            className="project-card"
            style={cardStyle}
            onMouseEnter={() => onMouseEnter(project)}
            onMouseLeave={onMouseLeave}
        >
            <div className="card-icon-wrapper">
                <Icon size={28} />
            </div>

            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-desc">{description}</p>
            </div>

            <ArrowRight className="card-arrow" size={24} />
        </a>
    );
};

export default ProjectCard;
