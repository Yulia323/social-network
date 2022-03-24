import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {UiModule} from "../../ui/ui.module";
import {RegistrationComponent} from "./registration/registration.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [AuthRoutingModule],
  providers: [
  ]
})
export class AuthModule {
}
