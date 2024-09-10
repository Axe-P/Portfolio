import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" style={{ padding: '20px', textAlign: 'left' }}>
      <h2>About Me</h2>
      <img
        src="./public/assets/pfp.jpeg"
        alt="pfp"
        style={{ borderRadius: '70%', width: '200px', height: '200px', objectFit: 'cover', float: 'left', marginRight: '20px' }}
      />
      <p style={{ fontSize: '21px', lineHeight: '1.6' }}>
        Hello! I’m Axel, a passionate full-stack developer. My journey in web development began with HTML and CSS,
        and since then, I've expanded my skill set to include JavaScript, TypeScript, SQL, and React. I also have
        experience with APIs and Node.js, which enhance my ability to build and integrate robust web applications.
      </p>
      <p style={{ fontSize: '21px', lineHeight: '1.6' }}>
        I use modern tools and frameworks like Vite to streamline development and optimize performance, helping me
        create dynamic web applications and interactive user interfaces. I’m always eager to tackle new challenges
        and learn emerging technologies.
      </p>
      <p style={{ fontSize: '21px', lineHeight: '1.6' }}>
        In addition to my technical skills, I value clear communication and effective problem-solving. I’m dedicated
        to creating user-friendly solutions and continuously improving my craft.
      </p>
      <p style={{ fontSize: '25px', lineHeight: '1.6', textAlign: 'center' }}>
        Feel free to explore my portfolio to see some of the projects I’ve been working on. I look forward to connecting with you!
      </p>
    </section>
  );
};

export default AboutMe;
