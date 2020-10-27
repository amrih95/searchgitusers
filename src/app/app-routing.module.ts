import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    children: [
      {
        path: '',
        loadChildren: 'src/app/views/search-box/search-box.module#SearchBoxModule',
      },
    ],
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: 'src/app/views/profile/profile.module#ProfileModule',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
