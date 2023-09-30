import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  formularioLogin: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder
    ) { 
      this.formularioLogin = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
    }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home'])
  }
  ingresar(){
    this.router.navigate(['/home'])
  }

}
