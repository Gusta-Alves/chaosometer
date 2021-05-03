import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form_login: FormGroup;

  constructor(private _form_builder: FormBuilder,
              private _nav_controller: NavController) { }

  ngOnInit() {
    this.form_login = this._form_builder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  onSubmit(){
    this._nav_controller.navigateForward(['home']);
  }
}
