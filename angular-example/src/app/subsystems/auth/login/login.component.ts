import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {PAGES_ROUTE_PATH} from "../../pages/pages-urls";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
  ) {
    this._createForm()
  }

  private _createForm() {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    })
  }

  ngOnInit(): void {
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe(() =>
      this.router.navigate([PAGES_ROUTE_PATH.PROFILE]))
  }
}
