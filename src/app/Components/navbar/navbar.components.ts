import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <div class="container nav-content">
        <a routerLink="/" class="logo">Portfolio</a>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li><a routerLink="/certificates" routerLinkActive="active">Certificates</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      background: var(--primary-color);
      padding: 1rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover, .nav-links a.active {
      color: var(--secondary-color);
    }

    @media (max-width: 768px) {
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class NavbarComponent {}