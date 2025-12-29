import React from "react";
import "../Components/Style/ResumeSimple.css";

function Resume() {
  return (
    <div className="resume-wrapper clean">

      {/* LEFT SIDEBAR */}
      <div className="sidebar clean-sidebar">
        <div className="profile">
          <h1>Saravanan PM</h1>
          <p className="role">Full-Stack Web Developer</p>
        </div>

        <div className="sidebar-section">
          <h3>Contact</h3>
          <p>Chennai, Tamil Nadu</p>
          <p>+91 7604953373</p>
          <p><a href="mailto:pmsaravanan2727@gmail.com">pmsaravanan2727@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/saravanan-pm/">LinkedIn</a></p>
          <p><a href="https://github.com/saran-27">GitHub</a></p>
        </div>

        <div className="sidebar-section">
          <h3>Skills</h3>
          <ul>
            <li>React.js</li>
            <li>Django</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Personal Details */}
        <div className="sidebar-section">
          <h3>Personal Details</h3>
          <ul>
            <li><strong>DOB:</strong> 27 Jan 2004</li>
            <li><strong>Languages:</strong> English, Tamil</li>
            <li><strong>Location:</strong> Chennai</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Education</h3>
          <p><strong>B.Com Computer Application</strong> — 2022–2025</p>
        </div>
        <div className="sidebar-section">
          <h2>Certifications</h2>
          <ul>
            <li>Python Full Stack Using React — FITA Academy</li>
          </ul>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="main-content clean-main">

        <section>
          <h2>Career Objective</h2>
          <p>
            Motivated fresher seeking to apply technical skills and grow within a professional environment.
          </p>
        </section>

        <section>
          <h2>Projects</h2>

          <div className="project">
            <h3>Hotel Booking Website (React.js)</h3>
            <p>Developed a simple and responsive hotel booking UI with sections for rooms, services, and testimonials.</p>
            <p><strong>Technologies:</strong> React.js, CSS</p>
          </div>

          <div className="project">
            <h3>TripWagon – Travel Website (React.js)</h3>
            <p>Created a travel website showing destinations, offers, and testimonials with smooth AOS animations.</p>
            <p><strong>Technologies:</strong> React.js, CSS, AOS</p>
          </div>

          <div className="project">
            <h3>E-Commerce Furniture Website (React.js)</h3>
            <p>Built a clean and responsive e-commerce front-end displaying products and categories.</p>
            <p><strong>Technologies:</strong> React.js, Bootstrap/CSS</p>
          </div>

          <div className="project">
            <h3>Portfolio Landing Page (React.js)</h3>
            <p>Developed a multipage landing/portfolio UI including sections like Home, Portfolio, Shop, and Testimonials with clean responsive design.</p>
            <p><strong>Technologies:</strong> React.js, CSS</p>
          </div>

          <div className="project">
            <h3>Blog App (Python + SQLite)</h3>
            <p>CRUD operations implemented using Python and SQLite.</p>
            <p><strong>Technologies:</strong> Python, SQLite,Django</p>
          </div>
        </section>


        <section>
          <h2>Tools</h2>
          <ul>
            <li>VS Code</li>
            <li>Postman</li>
            <li>SQLite</li>
            <li>GitHub Desktop</li>
            <li>Chrome DevTools</li>
          </ul>
        </section>

        <section>
          <h2>Soft Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Quick Learner</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Resume;
