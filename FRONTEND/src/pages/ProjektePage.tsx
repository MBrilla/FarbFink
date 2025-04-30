import React, { useState } from 'react';
import '../styles/ProjektePage.css';

type Project = {
  id: string;
  title: string;
  categories: string[];
  image: string;
  description: string;
  kunde: string;
  datum: string;
  standort: string;
  flache: string;
  images?: string[]; // For collage
};

type Category = {
  id: string;
  label: string;
};

const categories: Category[] = [
  { id: 'all', label: 'ALL' },
  { id: 'energiestationen', label: 'ENERGIESTATIONEN' },
  { id: 'fassaden', label: 'FASSADEN' },
  { id: 'innenraume', label: 'INNENRÄUME' },
  { id: 'workshops', label: 'WORKSHOPS' }
];

const projects: Project[] = [
  {
    id: 'thw',
    title: 'THW',
    categories: ['fassaden'],
    image: './Projekte/thw.jpg',
    description: 'Voller Einsatz beim Technischen Hilfswerk. Das THW steht in Not- und Unglücksfällen der Bevölkerung mit Technik und Know How in Deutschland und weltweit helfend zur Seite.',
    kunde: 'THW Ortsverband Bonn Beuel',
    datum: '2020',
    standort: 'Bonn',
    flache: '90qm',
    images: [
      './Projekte/thw-1.jpg',
      './Projekte/thw-2.jpg',
      './Projekte/thw-3.jpg'
    ]
  },
  {
    id: 'giebelfassade',
    title: 'GIEBELFASSADE',
    categories: ['fassaden'],
    image: './Slider/cranegirlrGRAD.png',
    description: 'Künstlerische Gestaltung einer Giebelfassade',
    kunde: 'Privater Auftraggeber',
    datum: '2023',
    standort: 'Köln',
    flache: '120qm',
    images: [
      './Projekte/giebel-1.jpg',
      './Projekte/giebel-2.jpg',
      './Projekte/giebel-3.jpg'
    ]
  },
  // Add more projects here
];

const ProjektePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projekte-page">
      <section className="hero-section">
        <h1>
          <span>UNSERE PROJEKTE</span>
          <span className="highlight">IN DER ÜBERSICHT</span>
        </h1>
      </section>

      <section className="categories-section">
        <div className="categories-list">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.categories.map(cat => 
                categories.find(c => c.id === cat)?.label
              ).join(', ')}</p>
            </div>
          </div>
        ))}
      </section>

      {selectedProject && (
        <div className="project-detail-overlay" onClick={closeProjectDetail}>
          <div className="project-detail" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeProjectDetail}>×</button>
            <div className="project-detail-content">
              <div className="project-detail-header">
                <h2>{selectedProject.title}</h2>
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Kunde:</span>
                    <span className="meta-value">{selectedProject.kunde}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Datum:</span>
                    <span className="meta-value">{selectedProject.datum}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Standort:</span>
                    <span className="meta-value">{selectedProject.standort}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Fläche:</span>
                    <span className="meta-value">{selectedProject.flache}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-description">
                <p>{selectedProject.description}</p>
              </div>

              <div className="project-collage">
                {selectedProject.images?.map((img, index) => (
                  <div key={index} className="collage-item">
                    <img src={img} alt={`${selectedProject.title} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjektePage; 