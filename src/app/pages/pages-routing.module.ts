import { NotificationsComponent } from './notifications/notifications.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'hospital',
      component: DashboardComponent,
    },
    {
      path: 'doctores',
      component: ECommerceComponent,
    },
    {
      path: 'pacientes',
      component: PacientesComponent,
    },
    {
      path: 'triage',
      component: NotificationsComponent,
    },
    {
      path: 'sintomas',
      component: DashboardComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
