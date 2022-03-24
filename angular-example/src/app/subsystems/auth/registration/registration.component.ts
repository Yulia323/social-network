import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AUTH_ROUTE_PATH} from '../auth-urls';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = [];
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

  registration() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.registration(username, password).subscribe(
      () => this.router.navigateByUrl(AUTH_ROUTE_PATH.LOGIN),
      err => this.errors = err.error.errors
      )
  }
}
