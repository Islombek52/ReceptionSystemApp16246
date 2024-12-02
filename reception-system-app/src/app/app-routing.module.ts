// src/app/app-routing.module.ts
import { Routes, RouterModule } from '@angular/router';
import { GuestDetailComponent } from '../app/components/guest-detail/guest-detail.component';  // Import your component

const routes: Routes = [
  { path: 'guest-detail', component: GuestDetailComponent },
  // Define other routes here
];

export const AppRoutingModule = RouterModule.forRoot(routes);
