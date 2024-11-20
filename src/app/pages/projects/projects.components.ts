import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid">
          @for (project of projects; track project.title) {
            <div class="project-card card">
              <img [src]="project.imageUrl" [alt]="project.title">
              <h3>{{project.title}}</h3>
              <p>{{project.description}}</p>
              <div class="technologies">
                @for (tech of project.technologies; track tech) {
                  <span class="tech-tag">{{tech}}</span>
                }
              </div>
              <div class="project-links">
                <a [href]="project.demoUrl" target="_blank" class="btn">Live Demo</a>
                <a [href]="project.githubUrl" target="_blank" class="btn btn-outline">GitHub</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      overflow: hidden;
    }

    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }

    .project-card h3 {
      margin: 1rem 0;
      color: var(--primary-color);
    }

    .technologies {
      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: var(--light-bg);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }

    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .btn-outline {
      background: transparent;
      border: 2px solid var(--secondary-color);
      color: var(--secondary-color);
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Elite Epicure',
      description: 'A full-stack e-commerce restaurant platform with user authentication, add to cart function and checkout process.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'SEYONI',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Library Management System',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Weather Application',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Calculator',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Billing System',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'To Do App',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Brick-Breaker Mobile Game',
      description: 'A mobile app connecting users with home service providers.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      imageUrl: '/assets/project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example'
    },
    ];
}