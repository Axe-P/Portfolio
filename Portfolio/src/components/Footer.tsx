import React from 'react';

const Footer: React.FC = () => {
  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('Coming Soon!');
  };

  return (
    <footer>
      <div>
        <a href="https://github.com/Axe-P" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" onClick={handleLinkedInClick}>LinkedIn</a>
      </div>
      <p>&copy; 2024</p>
    </footer>
  );
};

export default Footer;
