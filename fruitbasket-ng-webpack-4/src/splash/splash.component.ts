import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import '../assets/css/styles.css';

@Component({
    selector: 'splash',
    templateUrl: './splash.component.html'
  })
export class SplashComponent implements OnInit {
    splash: boolean = true;

    constructor(private _router: Router) {

    }

    ngOnInit() {
        setTimeout(()=>{
          this._router.navigateByUrl('/dashboard');
         }, 5000)
      }
}