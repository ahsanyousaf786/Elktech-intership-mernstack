function About() {
  return (
    <section className="about-page">

      <div className="about-header">
        <h1>About Me</h1>
        <p>MERN Stack Developer | Full Stack Engineer</p>
      </div>

      <div className="about-container">

        {/* LEFT SIDE  */}
        <div className="about-left">
          <h2>Who I Am</h2>
          <p>
            I am a dedicated MERN Stack Developer specializing in building
            scalable full-stack web applications using MongoDB, Express.js,
            React.js, and Node.js. I focus on performance, clean architecture,
            and responsive UI development.
          </p>

          <p>
            I have experience developing authentication systems, REST APIs,
            e-commerce platforms, and modern portfolio websites. My goal is to
            combine strong backend logic with intuitive frontend experiences.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Frontend</h3>
              <p>React.js, JavaScript, CSS3, Responsive Design</p>
            </div>

            <div className="highlight-card">
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs</p>
            </div>

            <div className="highlight-card">
              <h3>Database</h3>
              <p>MongoDB, Mongoose</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <div className="skill-box">
            <h3>Full Stack Development</h3>
            <p>
              Building complete web applications from frontend UI to backend
              server and database integration.
            </p>
          </div>

          <div className="skill-box">
            <h3>UI / UX Design</h3>
            <p>
              Creating modern, clean, and user-friendly interfaces with a
              focus on user experience.
            </p>
          </div>

          <div className="skill-box">
            <h3>E-Commerce Solutions</h3>
            <p>
              Developing secure online stores with authentication, payments,
              and product management systems.
            </p>
          </div>

          <div className="skill-box">
            <h3>Version Control</h3>
            <p>
              Managing projects efficiently using Git and GitHub workflows.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;