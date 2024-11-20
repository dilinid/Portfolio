import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="social-links">
            <a href="https://github.com/dilinid" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/dilinid" target="_blank">LinkedIn</a>
          </div>
          <p>&copy; {{currentYear}} Dilini Dissanayake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--primary-color);
      color: white;
      padding: 2rem 0;
      margin-top: 4rem;
    }

    .footer-content {
      text-align: center;
    }

    .social-links {
      margin-bottom: 1rem;
    }

    .social-links a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      transition: color 0.3s;
    }

    .social-links a:hover {
      color: var(--secondary-color);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}