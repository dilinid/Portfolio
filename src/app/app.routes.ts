import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.components').then(m => m.HomeComponent)  // Fixed extension
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.components').then(m => m.ProjectsComponent)  // Fixed extension
  },
  {
    path: 'certificates',
    loadComponent: () => import('./pages/certificates/certificates.components').then(m => m.CertificatesComponent)  // Fixed extension
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.components').then(m => m.AboutComponent)  // Fixed extension
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.components').then(m => m.ContactComponent)  // Fixed extension
  }
];
