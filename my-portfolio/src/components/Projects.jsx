function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>MERN Authentication System</h3>
          <p>
            Full-stack authentication system using React, Node.js, Express,
            and MongoDB with JWT-based login and secure password hashing.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="project-card">
          <h3>E-Commerce Platform</h3>
          <p>
            Complete e-commerce web app with product management, cart,
            checkout flow, and RESTful APIs built with MERN stack.
          </p>
          <div className="project-tech">
            <span>MERN</span>
            <span>REST API</span>
            <span>Stripe</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Responsive portfolio built using React and modern CSS
            techniques showcasing services, projects, and contact form.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;