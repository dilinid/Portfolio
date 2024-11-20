import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="profile-image">
          <img src="assets/images/me.jpg" alt="Profile Picture">          </div>
          <div class="bio">
            <p>Hi, I'm Dilini, an undergraduate IT student focused on full-stack and mobile development, with a strong foundation in Flutter. 
              I thrive in collaborative environments, quickly mastering new tools and frameworks to solve problems and drive project success. 
              My passion lies in creating innovative solutions, and I'm eager to bring my skills to a team where I can both contribute and continue to grow.
            </p>
            <div class="cv">
              <a href="assets/21IT0467_I.M.D.W.Dissanayake.pdf" class="btn">Download CV</a>
            </div>
            <h3>Technical Skills</h3>
            <div class="skills">
              <div class="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>Angular</li>
                  <li>Flutter</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Database</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Project Management & Source Control</h4>
                <ul>
                  <li>Git</li>
                  <li>Agile</li>
                  <li>Scrum</li>
                  <li>MVC</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4> Development Environment</h4>
                <ul>
                  <li>VSCode</li>
                  <li>NetBeans</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Tools & Others</h4>
                <ul>
                  <li>Figma</li>
                  <li>Docker</li>
                  <li>Power BI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-content {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 3rem;
      align-items: start;
    }

    .profile-image img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .bio {
      font-size: 1.1rem;
      line-height: 1.8;
    }

    .cv{
      margin: 2rem 0 1rem;
    }

    .bio h3 {
      margin: 2rem 0 1rem;
      color: var(--primary-color);
    }

    .skills {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .skill-category h4 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }

    .skill-category ul {
      list-style: none;
    }

    .skill-category li {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .profile-image {
        max-width: 300px;
        margin: 0 auto;
      }

      .skills {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class AboutComponent {}