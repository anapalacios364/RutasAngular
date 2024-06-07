import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-redirect',
  template: ''
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.location.href = 'https://zonagatos.com/';
  }

}

