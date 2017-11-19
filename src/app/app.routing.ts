import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoatsComponent } from './boats/boats.component';
import { NewBoatComponent } from './new-boat/new-boat.component';
import { DetailBoatComponent } from './detail-boat/detail-boat.component';
import {WelcomeComponent} from './welcome/welcome.component';

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'boats', component: BoatsComponent},
  { path: 'new-boat', component: NewBoatComponent},
  { path: 'detail-boat/:id', component: DetailBoatComponent},
  { path: 'detail-boat', component: DetailBoatComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
