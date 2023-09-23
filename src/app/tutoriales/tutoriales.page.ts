import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
})
export class TutorialesPage implements OnInit {
  videoUrl : any ="https://www.youtube.com/embed/zNDD4EbjORs";  
  constructor(private router: Router, private Sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home'])
  }
  videoTutorial(video: string){
    return this.Sanitizer.bypassSecurityTrustResourceUrl(video);

  }

}
