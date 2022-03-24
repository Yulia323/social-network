import {RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {UiModule} from "./ui/ui.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./subsystems/pages/pages.module";
import {AuthorisedGuard} from "./core/guards/authorised.guard";
import {FriendsComponent} from "./subsystems/pages/friends/friends.component";
import {AuthInterceptor} from "./core/Interceptors/Interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    UiModule,
    PagesModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    HttpClient,
    AuthorisedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
