import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'project',
    redirectTo: '/project',
    pathMatch: 'full'
  },
  {
    path: 'tasklist',
    redirectTo: '/tasklist',
    pathMatch: 'full'
  }
  // {path: '**',  redirectTo: '/login'}
  // {path: 'login', loadChildren: 'app/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
