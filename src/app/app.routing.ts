import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowsePetitionsComponent } from './browse-petitions/browse-petitions.component';
import { PetitionDetailComponent } from './petition-detail/petition-detail.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'petitions',
    component: BrowsePetitionsComponent
  },
  {
    path: 'petitions/:id',
    component: PetitionDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
