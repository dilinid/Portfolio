import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <div class="container hero-content">
        <h1>Dilini Dissanayake</h1>
        <p class="tagline">Full Stack Developer & Mobile Developer</p>
        <div class="cta-buttons">
          <a routerLink="/projects" class="btn">View My Work</a>
          <a routerLink="/contact" class="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('/assets/hero-bg.jpg') center/cover;
      display: flex;
      align-items: center;
      text-align: center;
      color: white;
    }

    .hero-content {
      margin-top: -80px;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .tagline {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .btn-outline {
      background: transparent;
      border: 2px solid var(--secondary-color);
    }

    .btn-outline:hover {
      background: var(--secondary-color);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      .tagline {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HomeComponent {}