import React from 'react';

type Project = {
  title: string;
  imageUrl: string;
  deployedUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: 'Expense Tracker',
    imageUrl: './src/assets/projectpics/Expense Book.png',
    deployedUrl: 'https://axe-p.github.io/Project-1-ExpenseBook/',
    githubUrl: 'https://github.com/your-username/project1'
  },
  {
    title: 'CSS Cheatsheet',
    imageUrl: './src/assets/projectpics/CSS Cheatsheet.png',
    deployedUrl: 'https://axe-p.github.io/Mini-Project-2/',
    githubUrl: 'https://github.com/Axe-P/Mini-Project-2'
  },
  {
    title: 'First Ever Deployed Website',
    imageUrl: './src/assets/projectpics/First Project.png',
    deployedUrl: 'https://axe-p.github.io/prework-study-guide/',
    githubUrl: 'https://github.com/Axe-P/prework-study-guide'
  },
  {
    title: 'Horiseon Solutions',
    imageUrl: './src/assets/projectpics/Horiseon.png',
    deployedUrl: 'https://axe-p.github.io/Module-1-Challenge/',
    githubUrl: 'https://github.com/Axe-P/Module-1-Challenge/tree/Modifying-Branch'
  },
  {
    title: 'Employee Payroll',
    imageUrl: './src/assets/projectpics/Expense Tracker.png',
    deployedUrl: 'https://axe-p.github.io/Module-3-Challenge/',
    githubUrl: 'https://github.com/your-username/project2'
  },
  {
    title: 'First Portfolio',
    imageUrl: './src/assets/projectpics/First Portfolio.png',
    deployedUrl: 'https://axe-p.github.io/Module-2-Challenge/',
    githubUrl: 'https://github.com/Axe-P/Module-2-Challenge'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
