import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.components';  // Fixed extension
import { FooterComponent } from './Components/footer/footer.components';  // Fixed extension

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 140px);
    }
  `]
})
export class AppComponent {}
