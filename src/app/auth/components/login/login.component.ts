import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'redux-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(
      loginAction({ request }),
    );
  }
}
