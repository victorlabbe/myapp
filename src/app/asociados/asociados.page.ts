import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.page.html',
  styleUrls: ['./asociados.page.scss'],
})
export class AsociadosPage implements OnInit {

  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    console.log("Holaaaa")
    this.getUsers().subscribe(res=>{
      console.log("Res", res)
      this.users = res;
    }
    );
  }
  goToHome(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http
    .get("assets/files/asociados.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }


}
