import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioLogin: FormGroup;
  
  constructor(private router: Router, public fb: FormBuilder) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {

  }
  goToHome(){
    this.router.navigate(['/home'])
  }
  guardar(){
    this.router.navigate(['/home'])
  }
}
