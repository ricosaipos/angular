import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('../../projects/features/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('../../projects/features/examples/examples.module')
      .then(m => m.ExamplesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../projects/features/settings/settings.module')
      .then(m => m.SettingsModule)
  },
  {
    path: 'area',
    loadChildren: () => import('../../projects/area/src/app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: 'district',
    loadChildren: () => import('../../projects/district/src/app/app.module')
      .then(m => m.AppModule)
  },
  { path: '**', redirectTo: 'area', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
