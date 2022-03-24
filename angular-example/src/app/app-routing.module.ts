import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorisedGuard} from "./core/guards/authorised.guard";

const Routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./subsystems/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./subsystems/pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthorisedGuard],
  },
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
]


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
