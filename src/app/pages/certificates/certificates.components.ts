import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  imageUrl: string;
  downloadUrl: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Certificates</h2>
        <div class="certificates-grid">
          @for (cert of certificates; track cert.title) {
            <div class="certificate-card card">
              <img [src]="cert.imageUrl" [alt]="cert.title">
              <div class="certificate-info">
                <h3>{{cert.title}}</h3>
                <p class="organization">{{cert.organization}}</p>
                <p class="date">{{cert.date}}</p>
                <a [href]="cert.downloadUrl" class="btn" target="_blank">View Certificate</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certificates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .certificate-card {
      text-align: center;
    }

    .certificate-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .certificate-info h3 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .organization {
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
    }

    .date {
      color: #666;
      margin-bottom: 1rem;
    }
  `]
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: ' Career Skills in Software Development',
      organization: 'LinkedIn Learning',
      date: 'July 2024',
      imageUrl: '/assets/certificates/Career Skills SD.png',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Java Object-Oriented Programming',
      organization: 'LinkedIn Learning',
      date: 'November 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Flutter Essential Training',
      organization: 'LinkedIn Learning',
      date: 'January 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Web Development - Web Design for Beginners',
      organization: 'Centre for Open & Distance Learning - UOM',
      date: 'January 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Programming in Python - Python for Beginners',
      organization: 'Centre for Open & Distance Learning - UOM',
      date: 'November 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Git and GitHub Mastery',
      organization: 'Microsoft Learn Student Ambassadors',
      date: 'May 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Typescript Essential Training',
      organization: 'LinkedIn Learning',
      date: 'November 2024',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Data Science with Python',
      organization: 'SOUTHERN IRAA',
      date: 'November 2023',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
    {
      title: 'Basic Java Developments',
      organization: 'DIGIMAX Edu LK',
      date: 'September 2023',
      imageUrl: '/assets/cert1.jpg',
      downloadUrl: '/assets/certificates/cert1.pdf'
    },
  ];
}