import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UiModule} from "../../ui/ui.module";
import {PagesRoutingModule} from "./pages-routing.module";
import {ProfileComponent} from "./profile/profile.component";
import {PagesComponent} from "./pages.component";
import {PhotoComponent} from "./photo/photo.component";
import {NewsComponent} from "./news/news.component";
import {ProfileService} from "../../core/services/profile.service";
import {UsersService} from "../../core/services/users.service";
import {PostsComponent} from "./profile/posts/posts.component";
import {SidebarComponent} from "../sidebar/sidebar.component";

@NgModule({
  declarations: [
    ProfileComponent,
    PagesComponent,
    PhotoComponent,
    NewsComponent,
    PostsComponent,
    SidebarComponent,
  ],
  imports: [
    UiModule,
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesRoutingModule,
    PostsComponent,
    SidebarComponent
  ],
  providers: [
    ProfileService,
    UsersService
  ]
})
export class PagesModule {
}
