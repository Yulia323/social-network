import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {PagesComponent} from './pages.component';
import {NewsComponent} from './news/news.component';
import {PhotoComponent} from './photo/photo.component';
import {AuthorisedGuard} from '../../core/guards/authorised.guard';
import {FriendsComponent} from "./friends/friends.component";


const Routes: Routes = [
  {
    path: 'pages', component: PagesComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'news', component: NewsComponent},
      {path: 'photo', component: PhotoComponent},
      {path: 'friends', component: FriendsComponent},
    ],
    canActivate: [AuthorisedGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
