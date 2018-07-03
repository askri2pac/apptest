import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../../_services/authentification.service';
import {first} from 'rxjs/internal/operators';
import { Spinkit } from 'ng-http-loader';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
})
export class ModalBodyComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public spinkit = Spinkit;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authentificationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/'];
    /** spinner starts on init */
  /*  this.spinner.show();

    setTimeout(() => {
      /!** spinner ends after 5 seconds *!/
      this.spinner.hide();
    }, 5000);*/
  }
  get f() { return this.loginForm.controls; }
  onsubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.spinner.show();
    this.authentificationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log('data', this.returnUrl);
          this.router.navigate(['/contact']);
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
        },
        error => {
          console.log('errrorrr');
          this.loading = false;
          this.spinner.hide();
        }
      );
  }

}
