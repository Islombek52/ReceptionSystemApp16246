// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // This imports RouterModule if not handled in routing module
  template: `
    <div>
      <h1>Reception System App</h1>
      <nav>
        <a routerLink="/guest-detail">Go to Guest Details</a>
      </nav>
      <router-outlet></router-outlet> <!-- This renders the routed components -->
    </div>
  `,
})
export class AppComponent {}
